import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  //styleUrls: ['./search.component.css']
})
export class SearchComponent {

  value:string = undefined;

  constructor(private route: ActivatedRoute,
              private dataService:DataService) {
    route.params.subscribe( parametros => {
      this.value = parametros['numero'];
      dataService.filtrarSecadores(this.value);


    });
   }

}
