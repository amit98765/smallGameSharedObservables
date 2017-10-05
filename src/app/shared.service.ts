import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class Character {
  name: string;
  race: string;
  alignment: string;
  health: number;
}

export class SharedService {

  characters: Character[] = [
    { name: 'Aragon', race: 'human', alignment: "good", health: 100 },
    { name: 'Legolas', race: 'elf', alignment: "good", health: 100 },
    { name: 'Gimli', race: 'dwarf', alignment: "good", health: 100 },
    { name: 'Witch King', race: 'Wraith', alignment: "bad", health: 100 },
    { name: 'Lurtz', race: 'Uruk-hai', alignment: "bad", health: 100 },
    { name: 'Surumon', race: 'Wizard', alignment: 'bad', health: 100 }
  ];

  characterObservable: Observable<Character[]>;
  observer;

  constructor() {
    this.characterObservable = new Observable(observer => {
      this.observer = observer;
      this.observer.next(this.characters);
    });
  }

  hitCharacter(character, damage) {
    var index = this.characters.indexOf(character, 0);
    if (index > -1) {
      this.characters[index].health -= damage;
      if (this.characters[index].health <= 0) {
        this.characters.splice(index, 1);
      }
    }
    this.observer.next(this.characters);
  }

}
