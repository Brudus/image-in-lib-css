import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-image-with-lib-css',
  template: `
    <p>
      image-with-lib-css works!
    </p>
  `,
  styles: [
  ]
})
export class ImageWithLibCssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
