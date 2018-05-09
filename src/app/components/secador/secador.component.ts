import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-secador',
  templateUrl: './secador.component.html',
  //styleUrls: ['./secador.component.css']
})
export class SecadorComponent {

  secador:any = undefined;

  constructor(private route: ActivatedRoute, private dataService: DataService) {

    route.params.subscribe(parametros => {
      //console.log(parametros);
      //console.log(parametros['numero']); //use the same name configured in "app.routes.module.ts" file
      dataService.loadFirebaseSecadorDB(parametros['numero'])
      .subscribe(response => {
        this.secador = response.json();
        //console.log(this.secador);
      });
    });

  }

}
