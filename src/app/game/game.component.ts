import { Component, OnInit, Input } from '@angular/core';
//import {IGame} from "../Interface/game"

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  //@Input() gameData:IGame;
  GameImageWidth:number=300;

  constructor() { }

  ngOnInit() {
  }

}
