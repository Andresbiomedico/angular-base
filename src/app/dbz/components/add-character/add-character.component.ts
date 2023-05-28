import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter:EventEmitter<Character>= new EventEmitter();

  public character:Character = {
    name: 'andres',
    power: 0
  };

  emitCharacter():void{
    console.log('add-component',this.character);
    if(this.character.name.length === 0) return;
    // debugger
    this.onNewCharacter.emit(this.character);
    this.character = {
      name: 'andres',
      power: 0
    }
  }
}
