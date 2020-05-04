import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import {AngularFirestoreCollection, AngularFirestore} from "@angular/fire/firestore";
import {IGame} from "../Interface/game"


@Injectable({
  providedIn: 'root'
})
export class RawgApiService {

  private _siteURL="https://api.rawg.io/api/";
  private _key='games/';

  gamesDataCollection:AngularFirestoreCollection<IGame>;

  gamesData:Observable<IGame[]>;

  allGameData:IGame[];

  errorMessage:string;

  constructor(private _https:HttpClient,private _afs:AngularFirestore) {
    this.gamesDataCollection=_afs.collection<IGame>("Game_Data");
   }

  getGameData(gameName): Observable<RAWGResponse>{
    return this._https.get<RAWGResponse>(this._siteURL +this._key + gameName)
    .pipe(
      tap(data => console.log('Gamedata/error' + JSON.stringify(data))
      ),
      catchError(this.handleError)
      );
  }

  // getMoreGameData():Observable<IGame[]>{
  //   this.gamesData = this.gamesDataCollection.valueChanges({ idField:`id`});
  //   this.gamesData.subscribe(data => console.log("getCarsData:"+ JSON.stringify(data)))

  //   return this.gamesData;
  // }


  // addCarData(car:IGame):void{
  //   this.gamesDataCollection.add(JSON.parse(JSON.stringify(this.gamesData)))
  // }


  private handleError(err:HttpErrorResponse){
    console.log('rawgApiService: ' +err.message);
    return Observable.throw(err.message);
  }
}
