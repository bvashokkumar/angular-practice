import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() isActive:boolean;
  @Input() likesCount:number;


  constructor() { }

  onClick(){
    this.likesCount += (this.isActive)? -1 : 1; 
    this.isActive=!this.isActive;

  }

  ngOnInit(): void {
  }

}
