import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-all',
  templateUrl: './project-all.component.html',
  styleUrls: ['./project-all.component.scss']
})
export class ProjectAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.value = 'work';
  }

}
