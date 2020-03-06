import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { production } from '../main';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private http: HttpClient;
  private URL: string;

  constructor(http: HttpClient) {
    console.log("creating game service...");
    this.http = http;

    if (production)
      this.URL = 'http://CastleDefenseGame-env-2.acznmbp2nz.us-east-1.elasticbeanstalk.com/';
    else
      this.URL = 'https://localhost:44364/'
  }

  public init(team: string, id: number): Promise<boolean> {
    return this.http.get<boolean>(this.URL + 'api/game/init/' + team + '/' + id).toPromise();
  }
  public play(id: number): Promise<boolean> {
    return this.http.get<boolean>(this.URL + 'api/game/play/' + id).toPromise();
  }
  public end(id: number): Promise<boolean> {
    return this.http.get<boolean>(this.URL + 'api/game/end/' + id).toPromise();
  }
  public getAllGameIDs(): Promise<number[]> {
    return this.http.get<number[]>(this.URL + 'api/game/getallgameids').toPromise();
  }
  public getAllGameIDsAndStates(): Promise<string> {
    return this.http.get<string>(this.URL + 'api/game/getallgameidsandstates').toPromise();
  }
  public getLevelID(id: number): Promise<number> {
    return this.http.get<number>(this.URL + 'api/game/getlevelid/' + id).toPromise();
  }
}
