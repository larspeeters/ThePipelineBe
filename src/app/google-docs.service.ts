import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleDocsService {
  url = environment.googleDocs.url;
  constructor(private httpClient: HttpClient) { }

  public getSheet() {
    return this.httpClient.get(this.url);
  }
}
