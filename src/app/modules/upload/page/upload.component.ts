import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ImageService } from '../../../core/service/image.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  componentTitle = 'Upload Image';
  private file: any;
  @ViewChild('FileSelectInputDialog') fileSelectInputDialog: ElementRef;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  uploadImage() {
    const dialog: HTMLElement = this.fileSelectInputDialog.nativeElement;
    dialog.click();
  }

  onFileChanged(event: any) {
    this.file = event.target.files[0];
    this.imageService.displayImage(this.file);
  }

  onNext() {

  }
}
