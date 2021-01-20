import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PVSer } from './models/PVSer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private httpClient: HttpClient) { }

  public getPVSers() {
    return this.httpClient.get<Array<string>>(environment.pvs.url).toPromise();
  }
}
