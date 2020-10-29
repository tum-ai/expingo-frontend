import { Component, OnInit, Input } from '@angular/core';
import {ImageService} from '../../../core/service/image.service';
import {ApiService} from "../../../core/service/api.service";
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Observable, throwError} from 'rxjs';

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
  
  constructor(private imageService: ImageService, private route: ActivatedRoute,
              private apiService: ApiService) {

  }

  public response;
  ngOnInit(): void {
    this.send_file(this.imageService.image)
  }
  
  send_file(file) {
    const selectedMasks = this.route.snapshot.queryParamMap.get('0');
    console.log(selectedMasks);
    console.log("Starting api request");
    this.apiService.getMasks(selectedMasks, file).subscribe(
        data => {
          this.response = data;
          console.log("Successful API call");
          console.log(this.response);
        },
        error => {
          console.error("Error during API call");
        }
    );
  }

  masks() {
    return this.computedMasks;
  }

}
