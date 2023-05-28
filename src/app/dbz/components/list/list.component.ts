import { outputAst } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  characterList:Character[] = []
  @Output()
  // onIndexCharacterRemove: EventEmitter<number> = new EventEmitter();
  onIndexCharacterRemove: EventEmitter<string> = new EventEmitter();

  // OnDeleteCharacter(id:number):void{
  //   this.onIndexCharacterRemove.emit(id);
  // }
  OnDeleteCharacterById(id?:string):void{
    this.onIndexCharacterRemove.emit(id);
  }

}
