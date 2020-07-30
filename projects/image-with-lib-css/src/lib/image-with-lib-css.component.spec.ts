import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWithLibCssComponent } from './image-with-lib-css.component';

describe('ImageWithLibCssComponent', () => {
  let component: ImageWithLibCssComponent;
  let fixture: ComponentFixture<ImageWithLibCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageWithLibCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageWithLibCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
