import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ImageService } from '../../../core/service/image.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  componentTitle = 'Upload Image';
  file: any;
  @ViewChild('fileUpload', {static: false}) fileUpload: ElementRef;
  imageUploaded = false;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    if (this.imageService.currentImage) {
      this.imageUploaded = true;
    }
  }

  uploadImage() {
    const dialog = this.fileUpload.nativeElement;
    dialog.click();
    this.imageUploaded = true;
  }

  onFileChanged(event: any) {
    this.file = event.target.files[0];
    this.imageService.uploadImage(this.file);
  }


}
