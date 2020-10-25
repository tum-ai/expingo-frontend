import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../../core/service/image.service';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss']
})
export class MaskComponent implements OnInit {

  componentTitle = 'Masking';
  computedMasks = [
    {name: 'TestMask', form: new FormControl()}
  ];
  constructor(private imageService: ImageService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const selectedMasks = this.route.snapshot.queryParamMap.get('0');
    console.log(selectedMasks);
    const image = this.imageService.image;
    // TODO send image to server
    /* CURL Request looks like: 
    "https://expingo-mask-service-oztyeiy7sa-uc.a.run.app/getMasks/?classes=person" -H  "accept: application/json" -H  "Content-Type: multipart/form-data" -F "file=@jakobkruse.png;type=image/png"
     */
    // Wait for processing
  }

  masks() {
    return this.computedMasks;
  }

}
