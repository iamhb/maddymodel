import { Component, OnInit } from '@angular/core';
import{ HttpClient, HttpHeaders }from '@angular/common/http';
import { SubjectModel } from '../subject-menu/subjectmodel';
import { FacultyModel } from '../faculty-menu/facultymodel';


@Component({
  selector: 'app-section-menu',
  templateUrl: './section-menu.component.html',
  styleUrls: ['./section-menu.component.css']
})
export class SectionMenuComponent implements OnInit {
depname: string= 'IT';
semValue='';
secValue='';
collectionvar='';

interpretation = {};


facvalue='';


addSectionvar:boolean;
viewSectionvar:boolean;
deleteSectionvar:boolean;
setSectionvar:boolean;

allSubjects:SubjectModel[]=[];
allFaculty:FacultyModel[]=[];

facultynamevar=[];

index = ['0', '1', '2', '3', '4', '5'];

  constructor(private http:HttpClient) { }

  ngOnInit() {
/*fetching faculty name*/
this.http.
        post("http://localhost:3000/api/get_facultyname",{params: {depValue: this.depname }}).
        subscribe(
          data  => {
          console.log(data);
         this.allFaculty=[];
          for (var key in data) {
                  console.log(data[key]);
                  this.allFaculty.push(data[key]);
          }
          console.log("in OnInit");
          console.log(this.allFaculty);
          },
          error  => {
          console.log("Error", error);
        });

  }

 addSection(): void{
  		this.addSectionvar= true;
  		this.viewSectionvar= false;
   		this.deleteSectionvar= false;
      this.setSectionvar=false;
  }

  addSectiondb():void{
  	alert(this.semValue+this.secValue);
  	this.collectionvar= this.semValue+this.secValue;
this.http.post("http://localhost:3000/api/create_section",{params: {depValue: this.depname,sectionName :this.secValue, semesterName :this.semValue}}).
   subscribe(
          data  => {
            console.log("loaded successfully ");
          },
          error  => {
          console.log("Error", error);
        });
/*this.semValue='';
this.secValue='';*/
  }


  viewSection():void{
  	this.addSectionvar= false;
  		this.viewSectionvar= true;
   		this.deleteSectionvar= false;
        this.setSectionvar=false;

   		alert("in view section");

   		this.http.post("http://localhost:3000/api/view_section",{params: {depValue: this.depname }}).
   subscribe(
          data  => {
            console.log("loaded successfully ");
          },
          error  => {
          console.log("Error", error);
        });
/*this.semValue='';
this.secValue='';*/

  }


  setSection():void{
    this.addSectionvar= false;
      this.viewSectionvar= false;
      this.deleteSectionvar= false;
        this.setSectionvar=true;
  }

  getSubject(semValue):void{
    //alert(semValue);
    if(this.semValue){
    //alert(semValue);
    this.http.
        post("http://localhost:3000/api/get_subjectname",{params: {name: semValue, depValue: this.depname }}).
        subscribe(
          data  => {
          console.log("chats loaded successfully ");
          console.log(data);
         this.allSubjects=[];
          for (var key in data) {
                  console.log(data[key]);
                  this.allSubjects.push(data[key]);
          }
          console.log(this.allSubjects[0]);
          },
          error  => {
          console.log("Error", error);
        });
}
  }

  setSectiondb():void{

    //alert(this.facultynamevar[2]);
    console.log("in set secdb"+this.facultynamevar);

  }

  showFac(fac:string):void{
    alert(fac);
  }
}
