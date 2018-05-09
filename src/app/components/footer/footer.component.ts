import { Component } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  //styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  ano: number = new Date().getFullYear();

  constructor(public dataService:DataService) {

  }

}
