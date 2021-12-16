import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {

  // slideImageUrlOne="assets/12.jpg";
  slideImageUrlOne="url('../assets/12.jpg')";
  slideImageUrlTwo="url('../assets/16.jpg')";
  slideImageUrlThree="url('../assets/19.jpg')";

  images = [
    {
      title: 'tree',
      url: ''
    },
    {
      title: 'tree',
      url: ''
    },
    {
      title: 'tree',
      url: ''
    },
    {
      title: 'tree',
      url: ''
    },
    {
      title: 'tree',
      url: ''
    },
    {
      title: 'tree',
      url: ''
    },
    {
      title: 'tree',
      url: ''
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
