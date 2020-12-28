import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-all',
  templateUrl: './blog-all.component.html'
})
export class BlogAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.value = 'blog';
  }

}
