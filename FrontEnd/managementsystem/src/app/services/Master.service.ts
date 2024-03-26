import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Master } from '../models/Master.model';

@Injectable({ providedIn: 'root' })
export class MasterService {
  private API = 'http://localhost:8080/studentAPI';
  constructor(private http: HttpClient) {}

  insertMasterDetails(master: Master) {
    return this.http.post<Master>(`${this.API}/master`, master);
  }

  fetchMasterDeails() {
    return this.http.get<Master[]>(`${this.API}/master`);
  }
}
