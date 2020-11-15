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
          const reader = new FileReader();
          reader.onloadend = (e) => {
            this.imageService.resetMasks()
            this.imageService.setImageFromBase64(reader.result);
          };
          reader.readAsDataURL(data);
          console.log(this.response);
          this.stillLoading = false;
        },
        error => {
          console.log(error);
        }
    );
  }
}
