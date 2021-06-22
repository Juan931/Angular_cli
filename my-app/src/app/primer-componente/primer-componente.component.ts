import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
    selector:"app-primercomponentee",
    templateUrl: "./primer-componente.component.html",
    styleUrls: ['./primer-componente.component.css']

})

export class PrimerComponenteeComponent{
    title="mi primeraApp";
      

}