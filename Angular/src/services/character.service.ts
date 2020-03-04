import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { production } from '../main';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private URL: string;

  constructor(private http: HttpClient) {
    this.http = http;

    if (production)
      this.URL = 'https://CastleDefenseGame-env-2.acznmbp2nz.us-east-1.elasticbeanstalk.com/';
    else
      this.URL = 'https://localhost:44364/'
  }

  public getCharacter(team: string, name: string): Promise<string> {
    return this.http.get<string>(this.URL + 'api/characters/getcharacter/' + team + '/' + name).toPromise();
  }

  public getPrice(team: string, name: string): Promise<number> {
    return this.http.get<number>(this.URL + 'api/characters/getprice/' + team + '/' + name).toPromise();
  }

  public getTeam(team: string): Promise<string[]> {
    return this.http.get<string[]>(this.URL + 'api/characters/getteam/' + team).toPromise();
  }

  public getInfo(team: string, name: string) {
    return this.http.get<number>(this.URL + 'api/characters/getinfo/' + team + '/' + name).toPromise();
  }
}
