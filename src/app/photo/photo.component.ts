import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor() { }
  public video=[
    {vName:'Tunisie SidiBouzied', Photo:'/assets/photo-1.jpg' ,Like:0,Dislike:0},
    {vName:'France Paris', Photo:'assets/photo-2.jpg', Like:0,Dislike:0},
    {vName:'Germany Berlin', Photo:'assets/photo-3.jpg', Like:0,Dislike:0},
    {vName:'italien Mielano', Photo:'assets/photo-4.jpg', Like:0,Dislike:0}
  ]

  ngOnInit(): void {
  }
  public LikeCounter(video:any){
    video.Like++;
  }
  public DislikeCounter(video:any){
    video.Dislike++;
  }

}
