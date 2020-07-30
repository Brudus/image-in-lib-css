import { TestBed } from '@angular/core/testing';

import { ImageWithLibCssService } from './image-with-lib-css.service';

describe('ImageWithLibCssService', () => {
  let service: ImageWithLibCssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageWithLibCssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
