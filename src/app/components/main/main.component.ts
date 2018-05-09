import { Component } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  //styleUrls: ['./main.component.css']
})

export class MainComponent {

  constructor(private dataService: DataService,
              private router:Router) { }

  searchDryer(value:string) {
    this.router.navigate( ['search', value] );
  }

}