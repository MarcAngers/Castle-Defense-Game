import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { production } from '../main';

export class UserServices {
    private http: HttpClient;
    private URL: string;

    constructor(http: HttpClient) {
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