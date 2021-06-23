import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent implements OnInit {
  
  img="https://thecatapi.com/api/images/get?format=src&type=gif results_per_page="
  
  constructor() { }

  ngOnInit(): void {

    

  }

}
