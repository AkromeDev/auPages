import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {

  currentPage = 0;
  slideImageUrlOne="url('../assets/12.jpg')";
  slideImageUrlTwo="url('../assets/16.jpg')";
  slideImageUrlThree="url('../assets/19.jpg')";

  images = [
    {
      title: 'tree',
      backgroundImage: "url('../assets/12.jpg')",
      url: 'https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'lake',
      backgroundImage: "url('../assets/16.jpg')",
      url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'mountain',
      backgroundImage: "url('../assets/19.jpg')",
      url: 'https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'city',
      backgroundImage: "url('../assets/12.jpg')",
      url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'insdustry',
      backgroundImage: "url('../assets/16.jpg')",
      url: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kdXN0cnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'redmount',
      backgroundImage: "url('../assets/19.jpg')",
      url: 'https://images.unsplash.com/photo-1596860618912-d189c3a0576a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDA2OTcwOXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'fear',
      backgroundImage: "url('../assets/12.jpg')",
      url: 'https://images.unsplash.com/photo-1413847394921-b259543f4872?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
