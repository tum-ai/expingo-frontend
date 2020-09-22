import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  componentTitle = 'Upload Image';
  private file = '';
  @ViewChild('FileSelectInputDialog') fileSelectInputDialog: ElementRef;

  constructor() { }

  ngOnInit(): void {}

  uploadImage() {
    const dialog: HTMLElement = this.fileSelectInputDialog.nativeElement;
    dialog.click();
  }

  onFileChanged(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }
}
