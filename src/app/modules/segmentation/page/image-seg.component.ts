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
      {name: 'car', form: new FormControl()},
      {name: 'person', form: new FormControl()},
      {name: 'cat', form: new FormControl()},
      {name: 'dog', form: new FormControl()},
      {name: 'airplane', form: new FormControl()},
      {name: 'toilet', form: new FormControl()},
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
