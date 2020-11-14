import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../../core/service/image.service';
import {MaskService} from '../../../core/service/mask.service';
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatCheckboxChange} from '@angular/material/checkbox';
import mergeImages from 'merge-images';

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
              private apiService: MaskService, private router: Router) {
  }

  stillLoading: boolean;

  ngOnInit(): void {
    this.sendFile(this.imageService.image);
  }

  sendFile(file) {
    const selectedMasks = this.route.snapshot.queryParamMap.get('0');
    console.log(selectedMasks);
    this.stillLoading = true;
    this.apiService.getMasks(selectedMasks, file).subscribe(
        data => {
          console.log(data);
          this.stillLoading = false;
          this.extractMasks(data);
        },
        error => {
          console.error(error);
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
      mergeImages(selectedMasks)
          .then(b64 => {
            this.imageService.setCombinedMask(b64);
            this.imageService.displayCurrentImage();
          });
    } else {
      this.imageService.setCombinedMask('');
      this.imageService.displayCurrentImage();
    }
  }

    onSubmit() {
      console.log('Paint!');

      this.router.navigate(['/painting']);

    }
}
