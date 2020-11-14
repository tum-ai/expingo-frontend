import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpaintingComponent } from './inpainting.component';

describe('InpaintingComponent', () => {
  let component: InpaintingComponent;
  let fixture: ComponentFixture<InpaintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpaintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
