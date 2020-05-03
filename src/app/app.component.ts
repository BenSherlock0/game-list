import { Component } from '@angular/core';
import { RawgApiService } from './services/rawg-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RawgApiService]
})

export class AppComponent {
  

  gameData:RAWGResponse;
  errorMessage:any;

  constructor(private _rawgService:RawgApiService){

  }

  getGameDetails(gameName:string) : boolean{
    this._rawgService.getGameData(gameName).subscribe(
      gameData => {
          this.gameData=gameData;
          console.log('Title:' + this.gameData.Name)
      },
      error => this.errorMessage = <any>error
    );
    return false;
  }
}
