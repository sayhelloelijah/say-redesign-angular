import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-single',
  templateUrl: './project-single.component.html'
})
export class ProjectSingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.value = "work";
  }

}
