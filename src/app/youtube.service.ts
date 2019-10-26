import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CourseByWeek} from './syllabus/syllabus.component';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  apiKey: string;
  results: any;
  videoArray: VideoObject[] = [];
  constructor(private http: HttpClient) { }
/*
  this.apikey = 'AIzaSyDQONZ6SzacEZR6G5mxg3qfKiS5IORtmRo';
*/
  getVideosForChanel() {
    const url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDQONZ6SzacEZR6G5mxg3qfKiS5IORtmRo&q=angularjs' +
        '&order=viewCount&part=snippet &type=video&maxResults=10';
    this.http.get(url).subscribe(data => {
      this.results = data;
      this.results.items.forEach(item => {
        const obj = new VideoObject();
        obj.title = item.snippet.title;
        obj.videoId = item.id.videoId;
        this.videoArray.push(obj);
      })
    });
    return this.videoArray;
  }
}

export class VideoObject {
  title: any;
  videoId: any;
}
