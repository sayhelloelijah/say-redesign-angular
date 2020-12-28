import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.value = 'contact';
  }

}
