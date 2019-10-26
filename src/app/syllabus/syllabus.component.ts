import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {DatePipe, formatDate} from '@angular/common';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.scss']
})
export class SyllabusComponent implements OnInit {

  courseData: string;
  schedulerFlag: boolean;
  syllabusObj: any;
  courseByWeekArray: CourseByWeek[] = [];
  i: number;
  courseScheduledData: string;
  pipe = new DatePipe('en-US');
  public fromDate: Date;
  public toDate: Date ;
  constructor() { }
  ngOnInit() {
    this.schedulerFlag = false;
    const obj = new CourseByWeek();
    obj.week = 1;
    this.courseByWeekArray.push(obj);
  }
  syllabus() {
  console.log('courses: ', this.courseData);
  }
  courseScheduler() {
    console.log( this.schedulerFlag );
    this.schedulerFlag = !this.schedulerFlag;
  }
  addSchedule() {
    const myFormattedDate = this.pipe.transform(this.toDate, 'short');
    console.log(myFormattedDate);
  }
  addNewCourseByWeek() {
    const obj = new CourseByWeek();
    obj.week  = this.courseByWeekArray.length ? this.courseByWeekArray.length + 1 : 1;
    this.courseByWeekArray.push(obj);
  }
  removeCourseByWeek(index) {
    if (this.courseByWeekArray[index] != null) {
      this.courseByWeekArray.splice(index, 1);
    }
    console.log(this.courseByWeekArray);
  }
}
export class CourseByWeek {
  userID: number;
  week: number;
  courses: string;
  fromDate: Date;
  toDate: Date;
}
