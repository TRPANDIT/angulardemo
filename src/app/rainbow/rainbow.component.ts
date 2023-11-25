import { Component } from '@angular/core';

@Component({
  selector: 'app-rainbow',
  templateUrl: './rainbow.component.html',
  styleUrl: './rainbow.component.css'
})
export class RainbowComponent {
  colors: string[] = ["Red","Orange","Yellow","Green","Blue","Indigo","Violet"];
}
