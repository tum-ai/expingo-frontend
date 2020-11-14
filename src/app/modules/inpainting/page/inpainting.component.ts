import {Component, OnInit} from '@angular/core';
import {InpaintingService} from '../../../core/service/inpainting.service';
import {PaintingRequestStorageService} from "../../../core/service/painting-request-storage.service";


@Component({
  selector: 'app-inpainting',
  templateUrl: './inpainting.component.html',
  styleUrls: ['./inpainting.component.scss']
})
export class InpaintingComponent implements OnInit {
  componentTitle = 'Paint';
  stillLoading = false;
  public response;

  constructor(private paintService: InpaintingService,
              private paintRequestStorage: PaintingRequestStorageService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Starting to paint');
    this.stillLoading = true;

    this.paintService.paintImage(
        this.paintRequestStorage.getStoredRequest().image,
        this.paintRequestStorage.getStoredRequest().mask
    ).subscribe(
        data => {
          this.response = data;
          this.stillLoading = false;
        },
        error => {
          console.log(error);
        }
    );
  }
}
