import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitchService {
  // TODO: Move to environment
  CLIENT_ID = 'hz68z9n2pd4elyu94764kd4t7rll1j';
  headers: HttpHeaders = new HttpHeaders({
    'Client-ID': environment.twitch.clientId
  });

  params: HttpParams;
  constructor(private httpClient: HttpClient) { }

  public getChannel(login: string): any {
    this.params = new HttpParams({
      fromObject: {
        login
      }
    });
    return this.httpClient.get('https://api.twitch.tv/helix/users', {headers: this.headers, params: this.params}).toPromise();
  }

  public getFollowers(channelId: string): any {
    this.params = new HttpParams({
      fromObject: {
        to_id: channelId
      }
    });

    return this.httpClient.get('https://api.twitch.tv/helix/users/follows', {headers: this.headers, params: this.params}).toPromise();
  }
}
