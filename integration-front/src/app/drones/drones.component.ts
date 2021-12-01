import { Component, OnInit } from '@angular/core';
import { DronesService } from './services/drones.service';
import { ResponseConsumidor } from './models/response-consumidor';
import { ResponseProdutor } from './models/response-produtor';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-drones',
  templateUrl: './drones.component.html',
  styleUrls: ['./drones.component.scss']
})
export class DronesComponent implements OnInit {

  constructor(private service: DronesService) { }

  responseConsumidor : ResponseConsumidor = {
    "responseMessage":"",
    "errorList":[],
    "objeto": {
      "mensagens":[
        {
          "id":0,
          "latitude":0,
          "longitude":0,
          "temperatura":0,
          "umidade":0,
          "alarmeTemperatura":"",
          "alarmeUmidade":""
        }
      ]
    }
  };

  responseProdutor : ResponseProdutor = {
    "responseMessage":"",
    "errorList":[],
    "objeto":null
  }

  ngOnInit(): void { 
    this.responseConsumidor.objeto.mensagens.pop();
  }
  
  startConsumidor() {
    this.service.getConsumidor().subscribe(
      (res) => {        
        let count = res.objeto.mensagens.length;
        if(count.valueOf() > 0) {
          console.log(`Response Consumidor ${res}`);
          this.responseConsumidor = res;
          alert("Informações recebidas!");
        } else {
          alert("Sem mensagens a ser recebidas, tente novamente mais tarde!");
        }
        
      },(error: HttpErrorResponse) => {
        console.log(`Error: ${error.error}`);
      }
      );
    }
    
  startProdutor() {
    this.service.startProdutor().subscribe(
      (res) => {
        this.responseProdutor = res;
        console.log(`Response Produtor ${res}`);
        alert("Informações do clima foram atualizadas com sucesso!\nOs dados dos sensores estão prontos!");
    },(error: HttpErrorResponse) => {
      console.log(`Error: ${error.error}`);
    }
  )
  }

}
