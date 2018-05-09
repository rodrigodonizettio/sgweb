import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
//import { reject } from 'q';
//import { resolve } from 'path';

@Injectable()
export class DataService {

  flagFooterDataLoaded:boolean = false; //nameOfVar:type = inicialization value
  flagFirebaseSecadoresDataLoaded:boolean = false;
  flagFirebaseSecadorDataLoaded:boolean = false;
  flagFirebaseAmostraDataLoaded:boolean = false;
  ///
  infoFooterData:any = {}; 
  infoFirebaseSecadoresData:any[] = [];
  infoFirebaseSecadoresFiltradosData:any[] = [];
  infoFirebaseSecadorData:any[] = [];
  infoFirebaseAmostraData:any[] = []; 
  ///
  firebaseSecadoresJsonURL:any = "https://sgweb-campotech.firebaseio.com/secador.json";
  firebaseSecadorJsonURL:any = "https://sgweb-campotech.firebaseio.com/secador/";
  firebaseAmostraJsonURL:any = "https://sgweb-campotech.firebaseio.com/amostra.json";


  constructor(public http:Http) { 
    this.loadFooterInfo();
    this.loadFirebaseSecadoresDB();
    this.loadFirebaseAmostraDB();
  }

  public loadFooterInfo() {
    this.http.get("assets/data/info.page.json")
    .subscribe(data => {
      //console.log(data.json());
      this.infoFooterData = data.json();
      this.flagFooterDataLoaded = true;
    });
  }

  public loadFirebaseSecadoresDB() {
    let promessa = new Promise((resolve, reject) => {
      this.http.get(this.firebaseSecadoresJsonURL)
      .subscribe(data => {
        //console.log(data.json());
        this.infoFirebaseSecadoresData = data.json();
        this.flagFirebaseSecadoresDataLoaded = true;
        resolve();
      });
    });
    return promessa;
  }

  public filtrarSecadores(numero:string) {
    //console.log("Buscando Secador");
    //console.log(this.infoFirebaseSecadoresData.length);
    if(this.infoFirebaseSecadoresData.length === 0) {
      this.loadFirebaseSecadoresDB().then( () => {
        this.filtro(numero);
      });
    } else {
      this.filtro(numero);
    }
  }

  private filtro(numero:string) {
    this.infoFirebaseSecadoresFiltradosData = [];
    this.infoFirebaseSecadoresData.forEach(secador => {
      if(secador.numero == numero) this.infoFirebaseSecadoresFiltradosData.push(secador);
      //console.log(secador);
    });
  }
  
  public loadFirebaseSecadorDB(numero:number) {
    //console.log(this.firebaseSecadorJsonURL.concat((numero-1).toString()));
    return this.http.get(this.firebaseSecadorJsonURL.concat((numero-1).toString()).concat('.json'));
  }

  public loadFirebaseAmostraDB() {
    this.http.get(this.firebaseAmostraJsonURL)
    .subscribe(data => {
      //console.log(data.json());

      //INCREASE DELAY TO LOAD THE DATA
      //setTimeout(()=> {
        this.infoFirebaseAmostraData = data.json();
        this.flagFirebaseAmostraDataLoaded = true;
      //}, 1500);
    })
  }
  

}
