import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  public getCharacter(team: string, name: string): Promise<string> {
    return this.http.get<string>(environment.apiURL + 'api/characters/getcharacter/' + team + '/' + name).toPromise();
  }

  public getPrice(team: string, name: string): Promise<number> {
    return this.http.get<number>(environment.apiURL + 'api/characters/getprice/' + team + '/' + name).toPromise();
  }

  public getTeam(team: string): Promise<string[]> {
    return this.http.get<string[]>(environment.apiURL + 'api/characters/getteam/' + team).toPromise();
  }

  public getInfo(team: string, name: string) {
    return this.http.get<number>(environment.apiURL + 'api/characters/getinfo/' + team + '/' + name).toPromise();
  }
}
