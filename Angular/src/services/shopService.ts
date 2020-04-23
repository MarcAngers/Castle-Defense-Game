import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

export class ShopService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public buy(id: number, player: number, unit: string): Promise<boolean> {
    return this.http.get<boolean>(environment.apiURL + 'api/game/buy/' + id + '/' + player + '/' + unit).toPromise();
  }

  public getNewIncomePrice(id: number, player: number): Promise<number> {
    return this.http.get<number>(environment.apiURL + 'api/game/incomeprice/' + id + '/' + player).toPromise();
  } 
  public getNewHealthPrice(id: number, player: number): Promise<number> {
    return this.http.get<number>(environment.apiURL + 'api/game/healthprice/' + id + '/' + player).toPromise();
  } 
}