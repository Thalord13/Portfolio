import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  download() {
    const link = document.createElement('a');
    link.download = 'resume';
    link.href = '../../assets/resume.pdf';
    link.click();
  }

}
