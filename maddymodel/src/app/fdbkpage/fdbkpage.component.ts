import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms'; 

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-fdbkpage',
  templateUrl: './fdbkpage.component.html',
  styleUrls: ['./fdbkpage.component.css']
})
export class FdbkpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

male='';
   favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
 
}
