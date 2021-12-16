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
      url: 'https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'lake',
      url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'mountain',
      url: 'https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'city',
      url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'insdustry',
      url: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kdXN0cnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'hamburg',
      url: 'https://images.unsplash.com/photo-1625425311066-c4525908ef8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY2tzJTIwaGFtYnVyZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'fear',
      url: 'https://images.unsplash.com/photo-1413847394921-b259543f4872?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
