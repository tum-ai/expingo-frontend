import {Component, OnInit} from '@angular/core';
import {InpaintingService} from '../../../core/service/inpainting.service';
import {PaintingRequestStorageService} from "../../../core/service/painting-request-storage.service";
import {ImageService} from "../../../core/service/image.service";


@Component({
  selector: 'app-inpainting',
  templateUrl: './inpainting.component.html',
  styleUrls: ['./inpainting.component.scss']
})
export class InpaintingComponent implements OnInit {
  componentTitle = 'Paint';
  stillLoading = false;
  finished = false;
  error = false;
  public response;
  base64data: any;

  constructor(private paintService: InpaintingService,
              private paintRequestStorage: PaintingRequestStorageService,
              private imageService: ImageService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Starting to paint');
    this.stillLoading = true;

    // const base64Image = this.paintRequestStorage.getStoredImage();
    // const base64Mask = this.paintRequestStorage.getStoredMask();

    this.paintService.paintImage(
        this.paintRequestStorage.getStoredImage(),
        this.paintRequestStorage.getStoredMask()
    ).subscribe(
        data => {
          this.response = data;
          this.imageService.resetMasks()
          this.imageService.setImageFromBase64(data.image);
          console.log(this.response);
          this.stillLoading = false;
          this.finished = true;
        },
        error => {
          console.log(error);
          this.error = true;
        }
    );
  }
  
  onDownload() {
      var a = document.createElement("a");
      a.href = this.imageService.getCurrentImage();
      a.download = "image-painted-ai-tum.png";
      a.click();
  }
}
