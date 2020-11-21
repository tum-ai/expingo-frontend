import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../../core/service/image.service';
import {MaskService} from '../../../core/service/mask.service';
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatCheckboxChange} from '@angular/material/checkbox';
import mergeImages from 'merge-images';
import {PaintingRequestStorageService, } from '../../../core/service/painting-request-storage.service';

@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss']
})
export class MaskComponent implements OnInit {

  componentTitle = 'Masking';

  maskForms = [];     // This variable contains names and form controls for the masks
  masks = [];             // The masks are stored here after the API call
  classes = [];           // The classese for the masks

  constructor(private imageService: ImageService, private route: ActivatedRoute,
              private apiService: MaskService, private router: Router,
              private paintingRequestStorage: PaintingRequestStorageService) {
  }

  allowContinuation: boolean;
  noMaskFound: boolean;
  stillLoading: boolean;
  error = false;

  ngOnInit(): void {
    this.noMaskFound = false;
    this.allowContinuation = false;
    this.stillLoading = true;
    this.sendFile(this.imageService.image);
  }

  sendFile(file) {
    const selectedMasks = this.route.snapshot.queryParamMap.getAll('0');
    console.log("Selected masks: " + selectedMasks);
    this.allowContinuation = false;
    this.apiService.getMasks(selectedMasks, file).subscribe(
        data => {
          console.log(data);
          this.stillLoading = false;
          this.extractMasks(data);
        },
        error => {
          console.error(error);
          this.stillLoading = false;
          this.error = true;
        }
    );
  }

  private extractMasks(response: any) {
    this.masks = response.masks;
    this.classes = response.classes;
    let index = 1;
    this.maskForms.length = 0;
    for (const cl of this.classes) {
      this.maskForms.push({name: 'Mask' + index + ': ' + cl, form: new FormControl()});
      index++;
    }
    if (index === 1) {
      this.noMaskFound = true;
    }
  }

  imageMaskClasses() {
    return this.classes;
  }

  formMask() {
    return this.maskForms;
  }

  ChangeMasks(_: MatCheckboxChange) {
    const selectedMasks = [];
    let index = 0;
    for (const checkbox of this.maskForms) {
      if (checkbox.form.value === true) {
        selectedMasks.push(this.masks[index]);
      }
      index++;
    }
    if (selectedMasks.length > 0) {
      this.allowContinuation = true;
      mergeImages(selectedMasks)
          .then(b64 => {
            this.imageService.setCombinedMask(b64);
            this.imageService.displayCurrentImage();
          });
    } else {
      this.allowContinuation = false;
      this.imageService.setCombinedMask('');
      this.imageService.displayCurrentImage();
    }
  }

  onReturn() {
    this.router.navigate(['/upload']);
  }

  onSubmit() {
    console.log('Paint!');
    this.paintingRequestStorage.storeRequest(
      this.imageService.getCurrentImage(),
      this.imageService.getCombinedMask()
  );
    this.router.navigate(['/painting']);
  }
}
