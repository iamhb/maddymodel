import { Component, OnInit } from '@angular/core';
import{ HttpClient, HttpHeaders }from '@angular/common/http';
import { SubjectModel } from './subjectmodel';
@Component({
  selector: 'app-subject-menu',
  templateUrl: './subject-menu.component.html',
  styleUrls: ['./subject-menu.component.css']
})

export class SubjectMenuComponent implements OnInit {
	depname: string= 'IT';

	 addSubjectvar= false;
   viewSubjectvar= false;
   deleteSubjectvar= false;

  addSubjectname='';
  addSubjectcode='';

   semValue:string='';
   allSubjects:SubjectModel[]=[];
   insertSubjects:SubjectModel;

  constructor(private http:HttpClient) { }

  ngOnInit() {}



addSubject(): void{
  		this.addSubjectvar= true;
  		this.viewSubjectvar= false;
   		this.deleteSubjectvar= false;
  }

addSubjectdb():void{
  alert(this.insertSubjects.subname);
   this.http.post("http://localhost:3000/api/add_subjectname",
    {params: {depValue: this.depname, subname :this.insertSubjects.subname, subcode :this.insertSubjects.subcode, sem:this.semValue }}).
   subscribe(
          data  => {
            console.log("added successfully ");
  
          },
          error  => {
          console.log("Error", error);
        });
}




viewSubject(): void{
  		this.viewSubjectvar= true;
  		this.addSubjectvar= false;
		this.deleteSubjectvar= false;
	}

	getSubject(semValue):void{
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

  deleteSubject(): void{
  		this.semValue='';
  		
  		this.deleteSubjectvar= true;
  		this.viewSubjectvar= false;
  		this.addSubjectvar= false;
  }

}
