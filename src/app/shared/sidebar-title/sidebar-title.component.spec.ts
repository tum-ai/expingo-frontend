import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTitleComponent } from './sidebar-title.component';

describe('SidebarTitleComponent', () => {
  let component: SidebarTitleComponent;
  let fixture: ComponentFixture<SidebarTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
