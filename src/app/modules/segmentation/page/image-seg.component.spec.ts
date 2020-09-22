import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSegComponent } from './image-seg.component';

describe('ImageSegComponent', () => {
  let component: ImageSegComponent;
  let fixture: ComponentFixture<ImageSegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
