import { HttpClient } from '@angular/common/http';
import { production } from '../main';

export class ShopService {
  private http: HttpClient;
  private URL: string;

  constructor(http: HttpClient) {
    this.http = http;

    if (production)
      this.URL = 'https://CastleDefenseGame-env-2.acznmbp2nz.us-east-1.elasticbeanstalk.com/';
    else
      this.URL = 'https://localhost:44364/'
  }

  public buy(id: number, player: number, unit: string): Promise<boolean> {
    return this.http.get<boolean>(this.URL + 'api/game/buy/' + id + '/' + player + '/' + unit).toPromise();
  }

  public getNewIncomePrice(id: number, player: number): Promise<number> {
    return this.http.get<number>(this.URL + 'api/game/incomeprice/' + id + '/' + player).toPromise();
  } 
  public getNewHealthPrice(id: number, player: number): Promise<number> {
    return this.http.get<number>(this.URL + 'api/game/healthprice/' + id + '/' + player).toPromise();
  } 
}