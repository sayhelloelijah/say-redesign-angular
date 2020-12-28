import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.value = 'about';
  }

}
