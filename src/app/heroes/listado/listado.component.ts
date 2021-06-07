import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes:string[] = ['IronMan','Spiderman','Hulk','Capitan América','Falcon','Vision', 'Dr Strange'] 
  heroeBorrado:string= ''

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift()?.toString() || ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
