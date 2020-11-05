import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../core/service/image.service';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.scss']
})
export class ImageDisplayComponent implements OnInit {

  imageSrc = '';
  masks = [];

  constructor(private imageService: ImageService) {
    this.imageService.imageChanged.subscribe(
        (src) => {
          this.imageSrc = src;
        }
    );
  }

  ngOnInit(): void {
      this.imageService.reloadCurrentImage();
  }
  
  image_masks() {
      this.masks = this.imageService.getMasks();
      return this.masks;
  }

}
