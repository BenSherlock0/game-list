import { Component, OnInit } from '@angular/core';
import { RawgApiService } from '../services/rawg-api.service';
import { IGame,Game} from "../Interface/game"

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  providers: [RawgApiService]
})
export class GameListComponent implements OnInit {
  gameData: IGame[];
  constructor(private _rawgAPIService:RawgApiService) { }

  ngOnInit() {
    // this._rawgAPIService.getMoreGameData().subscribe(gameData => 
    //   {this.gameData = gameData});
  }
  // addTheGame(mame:string,released:string,description:string,background_image:string):boolean{
  //   let tempGame:IGame;
  //   tempGame = new Game(name,released,description,background_image);
  //   this._rawgAPIService.addCarData(tempGame);
  //   return false;
  // }

}
