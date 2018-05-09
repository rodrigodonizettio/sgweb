import { Component } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  //styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent {

  constructor(public dataService: DataService) { }

}
