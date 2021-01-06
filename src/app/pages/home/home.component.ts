import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    document.body.classList.value = 'home';

    // const logo = document.body.querySelectorAll('#svg8 path');
    // logo.forEach(path => {
    //   console.log(path.getTotalLength());
    // });

    // const lines = document.body.querySelectorAll('#svg8 rect');
    // lines.forEach(line => {
    //   console.log(line.getTotalLength());
    // });
  }

}
