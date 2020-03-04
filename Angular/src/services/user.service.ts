import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../app/user';
import { production } from '../main';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL: string;

  constructor(private http: HttpClient) {
      this.http = http;
      if (production)
          this.URL = 'https://CastleDefenseGame-env-2.acznmbp2nz.us-east-1.elasticbeanstalk.com/';
      else
          this.URL = 'https://localhost:44364/'
  }

  public Login(username: string, password: string): Promise<User> {
      return this.http.get<User>(this.URL + 'api/user/login/' + username + '/' + password).toPromise();
  }
  public Win(username: string, id: number) {
      if (id < 1000)
          return this.http.get<User>(this.URL + 'api/user/win/' + username + '/' + id).toPromise();
      return this.http.get<User>(this.URL + 'api/user/win/' + username + '/1000').toPromise();
  }
}
