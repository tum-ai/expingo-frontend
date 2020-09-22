import {Component, OnInit} from '@angular/core';
import {ImageService} from '../../../core/service/image.service';
import {FormControl} from '@angular/forms';

export interface CheckboxWithFrom {
    name: string;
    form: FormControl;
}


@Component({
  selector: 'app-image-seg',
  templateUrl: './image-seg.component.html',
  styleUrls: ['./image-seg.component.scss']
})
export class ImageSegComponent implements OnInit {
  componentTitle = 'Segmentation';
  checkboxes: CheckboxWithFrom[] = [
      {name: 'Car', form: new FormControl()},
      {name: 'Human', form: new FormControl()},
      {name: 'Tree', form: new FormControl()},
      {name: 'Traffic Light', form: new FormControl()},
  ];

  constructor(private imageService: ImageService) {
    this.imageService.reloadCurrentImage();
  }

  ngOnInit() {
  }

  onSubmit() {
      const selectedObjects: string[] = [];
      for (const checkbox of this.checkboxes) {
          if (checkbox.form.value === true) {
              selectedObjects.push(checkbox.name);
          }
      }
      console.log(selectedObjects);
  }
}
