import {Component, OnInit} from '@angular/core';
import {ImageService} from '../../../core/service/image.service';
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

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
      {name: 'Plane', form: new FormControl()},
      {name: 'Cat', form: new FormControl()},
  ];

  constructor(
      private imageService: ImageService,
      private router: Router,
      private route: ActivatedRoute
  ) {
    this.imageService.reloadCurrentImage();
  }

  ngOnInit() {
  }

  checkboxesLeft() {
    const numBoxes = this.checkboxes.length;
    const end = numBoxes / 2;
    return this.checkboxes.slice(0, end);
  }

  checkboxesRight() {
      const numBoxes = this.checkboxes.length;
      const start = numBoxes / 2;
      return this.checkboxes.slice(start, numBoxes);
  }

  onSubmit() {
      const selectedObjects: string[] = [];
      for (const checkbox of this.checkboxes) {
          if (checkbox.form.value === true) {
              selectedObjects.push(checkbox.name);
          }
      }
      console.log(selectedObjects);
      this.router.navigate(['/masking'], { relativeTo: this.route, queryParams: selectedObjects});
  }
}
