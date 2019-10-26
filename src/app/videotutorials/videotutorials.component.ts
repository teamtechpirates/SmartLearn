import { Component, OnInit } from '@angular/core';
import {VideoObject, YoutubeService} from '../youtube.service';
@Component({
  selector: 'app-videotutorials',
  templateUrl: './videotutorials.component.html',
  styleUrls: ['./videotutorials.component.scss']
})
export class VideotutorialsComponent implements OnInit {
  videoArray: VideoObject[] = [];
  constructor( private youtubeService: YoutubeService) { }
  ngOnInit() {
    this.videoArray = this.youtubeService.getVideosForChanel();
    console.log('video', this.videoArray);
  }
}
