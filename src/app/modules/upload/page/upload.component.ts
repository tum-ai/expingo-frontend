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
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  uploadImage() {
    const dialog = this.fileUpload.nativeElement;
    dialog.click();
  }

  onFileChanged(event: any) {
    this.file = event.target.files[0];
    this.imageService.displayImage(this.file);
  }


}
