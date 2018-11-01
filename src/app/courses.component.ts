import {Component,Input} from '@angular/core';
import {CoursesService} from'./courses.service';

@Component({
    selector:'courses',
    template:`<div>
    <h2>{{"Title:" + title}}</h2>
    <ul>
    <li *ngFor="let course of courses"> this is {{course}}</li>
    </ul>
    <div (click)="onDivClick()">
    <button (click)="onSave($event)" class= " btn btn-primary">Save</button>
    
    <input [(ngModel)]="email" (keyUp.enter)="onKeyClick()"/>
    </div>
    </div>
    <div>
    {{course.title|uppercase}}<br>
    {{course.students|number}}<br>
    {{course.rating|number:'3.1-1'}}<br>
    {{course.price|currency:'AUD':'true'}}<br>
    {{course.name|uppercase}}<br>
    {{course.date|date:'shortDate'}}<br>
    </div>
   
`

})
export class CoursesComponent{
    @Input() names:string;
    title ="List of Courses";
    email :"star@maa.com";
    courses ;
    course={
        title:"my course",
        students:3456745,
        rating:4.7509679769,
        price:195,
        name:"angular",
        date: new Date(2019,3,23)

    }
    constructor(service :CoursesService){
        this.courses = service.getCourses();
       
    }
    onKeyClick(){
        
        console.log(this.email);
    }
    onDivClick(){
        console.log('hi angular');
    }
    onSave($event){
        $event.stopPropagation();
        console.log('message',$event);
    }
    

    
}
