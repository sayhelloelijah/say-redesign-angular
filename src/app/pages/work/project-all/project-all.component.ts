import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-all',
  templateUrl: './project-all.component.html'
})
export class ProjectAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.value = 'work';
  }

}
