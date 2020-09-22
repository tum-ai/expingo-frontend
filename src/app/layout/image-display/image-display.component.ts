import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../core/service/image.service';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.scss']
})
export class ImageDisplayComponent implements OnInit {

  imageSrc = '../../../assets/images/street.jpg';

  constructor(private imageService: ImageService) {
    this.imageService.imageChanged.subscribe(
        (src) => {
          this.imageSrc = src;
        }
    );
  }

  ngOnInit(): void {
  }

}
