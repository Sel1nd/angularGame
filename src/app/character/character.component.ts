import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itemNumber = [this.randomStart(),this.randomStart(),this.randomStart(),this.randomStart(),this.randomStart(),
    this.randomStart(),this.randomStart(),this.randomStart(),this.randomStart(),this.randomStart()];
  randomStartVar = 0;

  spellNumber = [this.randomStart(),this.randomStart(),this.randomStart(),this.randomStart(),this.randomStart()];

  characterNumber = 1;

  changeItem(x = 33){
  
    switch(x)
    {
      case 1: this.itemNumber[0] = Math.floor(Math.random() * 143) + 1;   break;
      case 2: this.itemNumber[1] = Math.floor(Math.random() * 143) + 1;   break;
      case 3: this.itemNumber[2] = Math.floor(Math.random() * 143) + 1;   break;
      case 4: this.itemNumber[3] = Math.floor(Math.random() * 143) + 1;   break;
      case 5: this.itemNumber[4] = Math.floor(Math.random() * 143) + 1;   break;
      case 6: this.itemNumber[5] = Math.floor(Math.random() * 143) + 1;   break;
      case 7: this.itemNumber[6] = Math.floor(Math.random() * 143) + 1;   break;
      case 8: this.itemNumber[7] = Math.floor(Math.random() * 143) + 1;   break;
      case 9: this.itemNumber[8] = Math.floor(Math.random() * 143) + 1;   break;
      case 10: this.itemNumber[9] = Math.floor(Math.random() * 143) + 1;   break;
    }
   }

  changeSpell(y = 33){
    switch(y)
    {
      case 1: this.spellNumber[0] = Math.floor(Math.random() * 236) + 1;   break;
      case 2: this.spellNumber[1] = Math.floor(Math.random() * 236) + 1;   break;
      case 3: this.spellNumber[2] = Math.floor(Math.random() * 236) + 1;   break;
      case 4: this.spellNumber[3] = Math.floor(Math.random() * 236) + 1;   break;
      case 5: this.spellNumber[4] = Math.floor(Math.random() * 236) + 1;   break;
    }
   }
   changeCharacter(){
    this.characterNumber = Math.floor(Math.random() * 8) + 1;  
   }
   randomStart(){
      this.randomStartVar = Math.floor(Math.random() * 143) + 1; 
      return(this.randomStartVar)
   }
}
