import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import{ STUDENTS } from '../mock-students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

 Students = STUDENTS;
  Student:Student={id:1, name:'',class:0, subject:'',schoolname:''};
  selectedStudent: Student;
  
  removeStudent(num)
 {
var studentList:Student[]=[];
for(var i=0;i<this.Students.length;i++)
     {
      if(this.Students[i].id!=num)
     {
       studentList.push(this.Students[i]);
     }
     }
this.Students=studentList;
}
  
addStudent(){

  if(this.Student.name.length>0 && this.Student.subject.length>0 ){
   this.Student.id=this.Students.length+1;
   this.Students.push(this.Student);
  this.Student={id:0,name:'',class:0, subject:'',schoolname:''};
  }
  else{
    alert("added");
  }
}
 
cancelButton(student)
{
  // this.Students.splice(this.Student,1);

}
  

  onSelect(Student: Student): void {
    this.selectedStudent = Student;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
