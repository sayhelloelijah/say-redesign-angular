import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.querySelectorAll(".resume__button").forEach(button => {
      button.addEventListener("click", () => {
        const sidebar = button.parentElement;
        const resumeContainer = sidebar.parentElement;
        const tabNumber = button.dataset.forTab;
        const activeTab = resumeContainer.querySelector(`.resume__content[data-tab="${tabNumber}"]`);

        sidebar.querySelectorAll(".resume__button").forEach(button => {
          button.classList.remove("resume__button--active");
        })
        resumeContainer.querySelectorAll(".resume__content").forEach(content => {
          content.classList.remove("resume__content--active");
        })

        button.classList.add("resume__button--active");
        activeTab.classList.add("resume__content--active");

      });
    });

    document.querySelectorAll(".resume").forEach(container => {
      container.querySelector(".resume__sidebar .resume__button").click();
    });

  }

}
