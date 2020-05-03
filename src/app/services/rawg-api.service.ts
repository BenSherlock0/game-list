import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RawgApiService {

  private _siteURL="https://api.rawg.io/api/";
  private _key='games/';

  constructor(private _https:HttpClient) { }

  getGameData(gameName): Observable<RAWGResponse>{
    return this._https.get<RAWGResponse>(this._siteURL +this._key + gameName)
    .pipe(
      tap(data => console.log('Gamedata/error' + JSON.stringify(data))
      ),
      catchError(this.handleError)
      );
  }

  private handleError(err:HttpErrorResponse){
    console.log('rawgApiService: ' +err.message);
    return Observable.throw(err.message);
  }
}
