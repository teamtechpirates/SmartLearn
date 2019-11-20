import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {CourseByWeek} from '../syllabus/syllabus.component';
import {GoogleService} from '../google.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    loggedUserObj: any;
    displayTopicFlag: string;
    displayFlag: string;
    knowledgeGraphData: any;
    sylArray: SyllabusArray[] = [];
    questionAnswers: RelatedQuestion[] = [];
    relatedTutorials: RelatedTutorials[] = [];
    relatedCertifications: RelatedCertifications[] = [];

    constructor(private router: Router, private googleService: GoogleService ,
                private formBuilder: FormBuilder , private authenticationService: AuthenticationService) { }

    ngOnInit() {
        debugger;
        this.displayFlag = 'false';
        this.authenticationService.currentUser().subscribe(res => {
            this.loggedUserObj = res;

            this.authenticationService.getUserSyllabus(this.loggedUserObj._id)
                .subscribe(res => {
                    console.log('syllabus res', res)
                    let result = res;
                    for (let item = 0; item < result.length; item++) {
                        for( let m = 0; m < result[item].Syllabus.length; m++) {
                            this.sylArray.push(result[item].Syllabus[m].courses);
                        }
                    }
                    ;
                    console.log('syllabusArray', this.sylArray);
                });
            console.log('logged user in dashboard comp' , this.loggedUserObj)
        }, (err) => {
            console.log(err);
        });
    }
    getSyllabus() {
        this.displayFlag = 'true';
    }
    getUserSyllabusById(syllabus) {
        this.questionAnswers = [];
        this.relatedTutorials = [];
        debugger;
                this.displayTopicFlag = 'true';
                console.log('topic flag ', this.displayTopicFlag)
                    this.googleService.getDetailsFromKnowledge(syllabus).subscribe(res => {
                        this.knowledgeGraphData = res;
                        console.log('knowledgeGraphData ::  ' , this.knowledgeGraphData);
                            for (let j = 0; j < this.knowledgeGraphData.related_questions.length; j++ ) {
                                let obj = new RelatedQuestion();
                                let s = syllabus;
                                obj.topic = s;
                                obj.question = this.knowledgeGraphData.related_questions[j].question;
                                obj.snippet = this.knowledgeGraphData.related_questions[j].snippet;
                                this.questionAnswers.push(obj);
                            };
                            for (let m = 0; m < this.knowledgeGraphData.organic_results.length; m++ ) {
                                let object = new RelatedTutorials();
                                object.link = this.knowledgeGraphData.organic_results[m].link;
                                object.title = this.knowledgeGraphData.organic_results[m].title;
                                this.relatedTutorials.push(object);
                            }
                        },
                        (err) => {console.log(err);
                        });
                console.log('this.questionAnswers ' , this.questionAnswers);
    }
}
export class SyllabusArray {
    courses: string;
}
export class RelatedQuestion {
    topic: string
    question: string;
    snippet: string;
}

export class RelatedTutorials {
    title: string
    link: string;
}

export class RelatedCertifications {
    title: string
    link: string;
}
