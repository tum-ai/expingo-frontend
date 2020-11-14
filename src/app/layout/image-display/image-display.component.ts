import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../core/service/image.service';
import mergeImages from 'merge-images';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.scss']
})
export class ImageDisplayComponent implements OnInit {

  imageSrc = '';

  constructor(private imageService: ImageService) {
    this.imageService.imageChanged.subscribe(
        (src) => {
          this.imageSrc = src;
          const combinedMask = this.imageService.getCombinedMask();

          if (combinedMask !== '') {
              console.log('Merging images');
              mergeImages([this.imageSrc, combinedMask])
                  .then(b64 => {
                      this.imageSrc = b64;
                  });
          }
        }
    );
  }

  ngOnInit(): void {
      this.imageService.displayCurrentImage();
  }
}
