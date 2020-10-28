import { Component, OnInit, Input } from '@angular/core';
import {ImageService} from '../../../core/service/image.service';
import {ApiService} from "../../../services/api.service";
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

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
    const selectedMasks = this.route.snapshot.queryParamMap.get('0');
    console.log(selectedMasks);
    const image = this.imageService.image;
    console.log("Starting api request");
    this.apiService.getMasks(selectedMasks, image).subscribe(
        data => {
          this.response = data;
          console.log("Successful API call");
        },
        error => {
          console.error("Error during API call");
          return Observable.throw(error);
        }
    );
  }

  masks() {
    return this.computedMasks;
  }

}
