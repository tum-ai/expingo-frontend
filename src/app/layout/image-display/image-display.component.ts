import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../core/service/image.service';
import {ApiService} from "../../core/service/api.service";
import mergeImages from 'merge-images';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.scss']
})
export class ImageDisplayComponent implements OnInit {

  imageSrc = '';
  combinedMask;

  constructor(private imageService: ImageService, private apiService: ApiService) {
    this.imageService.imageChanged.subscribe(
        (src) => {
          this.imageSrc = src;
          this.apiService.setImage(src);
          this.combinedMask = this.apiService.getCombinedMask();
          if (this.combinedMask) {
              console.log("Merging images");
              mergeImages([this.imageSrc, this.combinedMask])
                  .then(b64 => {
                      //document.querySelector('img').src = b64;
                      this.imageSrc = b64;
                  });
          }
        }
    );
  }

  ngOnInit(): void {
      this.imageService.reloadCurrentImage();
  }

  update_image(b64) {
      document.querySelector('img').src = b64;
  }
}
