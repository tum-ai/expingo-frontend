import { Component, OnInit, Input } from '@angular/core';
import {ImageService} from '../../../core/service/image.service';
import {ApiService} from "../../../core/service/api.service";
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {MatCheckboxChange} from '@angular/material/checkbox';

@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss']
})
export class MaskComponent implements OnInit {

  componentTitle = 'Masking';
  computedMasks = [];
  masks = [];
  classes = [];

  constructor(private imageService: ImageService,
              private router: Router,
              private route: ActivatedRoute,
              private apiService: ApiService) {

  }

  public response;
  stillLoading: boolean;
  ngOnInit(): void {
    this.send_file(this.imageService.image);
  }

  send_file(file) {
    const selectedMasks = this.route.snapshot.queryParamMap.get('0');
    console.log(selectedMasks);
    console.log('Starting api request');
    this.stillLoading = true;
    this.apiService.getMasks(selectedMasks, file).subscribe(
        data => {
          this.response = data;
          console.log('Successful API call');
          console.log(this.response);
          this.stillLoading = false;
          this.extractMasks(this.response);
        },
        error => {
          console.error('Error during API call');
        }
    );
  }

  private extractMasks(response: any) {
    this.masks = response.masks;
    this.classes = response.classes;
    let index = 1;
    for (let cl of this.classes) {
      this.computedMasks.length = 0;
      this.computedMasks.push({name: 'Mask' + index + ': ' +cl, form: new FormControl()});
      index++;
    }
  }

  image_mask_classes() {
    return this.classes;
  }

  image_masks() {
    return this.masks;
  }

  form_masks() {
    return this.computedMasks;
  }

  ChangeMasks($event: MatCheckboxChange) {
    console.log("Mask change detected");
    let selectedMasks = [];
    let index = 0;
    for (let checkbox of this.computedMasks) {
      if (checkbox.form.value === true) {
        selectedMasks.push(this.masks[index]);
      }
      index++;
    }
    this.imageService.setMasks(selectedMasks);
  }

    onSubmit() {
      console.log('Paint!');

      this.router.navigate(['/painting']);

    }
}
