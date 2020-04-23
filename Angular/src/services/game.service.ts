import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private http: HttpClient;
 
  constructor(http: HttpClient) {
    console.log("creating game service...");
    this.http = http;
  }

  public init(team: string, id: number): Promise<boolean> {
    return this.http.get<boolean>(environment.apiURL + 'api/game/init/' + team + '/' + id).toPromise();
  }
  public play(id: number): Promise<boolean> {
    return this.http.get<boolean>(environment.apiURL + 'api/game/play/' + id).toPromise();
  }
  public end(id: number): Promise<boolean> {
    return this.http.get<boolean>(environment.apiURL + 'api/game/end/' + id).toPromise();
  }
  public getPlayerStats(id: number, player: number):Promise<string> {
    return this.http.get<string>(environment.apiURL + 'api/game/getPlayerStats/' + id + '/' + player).toPromise();
  }
  public getAllGameIDs(): Promise<number[]> {
    return this.http.get<number[]>(environment.apiURL + 'api/game/getallgameids').toPromise();
  }
  public getAllGameIDsAndStates(): Promise<string> {
    return this.http.get<string>(environment.apiURL + 'api/game/getallgameidsandstates').toPromise();
  }
  public getLevelID(id: number): Promise<number> {
    return this.http.get<number>(environment.apiURL + 'api/game/getlevelid/' + id).toPromise();
  }
}
