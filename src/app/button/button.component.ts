import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

buttonText="Przycisk";
buttonClass="warning";
 
handleClick($event) {
  console.log('dziala', $event.target);
}
}
