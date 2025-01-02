import { DbzService } from './../services/dbz.service';
import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false
})

export class MainPageComponent  {
  constructor( private dbzService: DbzService) {}

  get characters(): Character[] {
    return this.dbzService.characters
  }

  onDeleteCharacterById(id: string): void {
    this.dbzService.onDeleteCharacterById(id)
  }

  onNewCharacter( character: Character): void {
    this.dbzService.onNewCharacter(character)
  }
}
