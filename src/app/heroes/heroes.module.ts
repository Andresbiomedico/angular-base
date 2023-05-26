import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
@NgModule({
  imports:[
    CommonModule
  ],
  declarations:[
    HeroComponent,
    ListComponent
  ],
  exports:[
    // ordenar ascendentemente los nombres se selecciona los dos crt + shift +p y se busca
    // sort line ascending y ordena las lineas alfabeticamente
    HeroComponent,
    ListComponent,
  ]
})
export class HerosModule{

}
