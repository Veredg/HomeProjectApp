import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { SearchParams } from '../interfaces/search-params';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  constructor(private http: HttpClient) { }

  getRepositories(SearchText: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params: SearchParams = new SearchParams();
    params.SearchText = SearchText;
    return this.http.post<any>(environment.servers.api + '/Repo', params, { headers });

  }
}
