import { Injectable } from "@angular/core";
import { Cat } from "../../model/cat.model";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private baseUrl = '/api/cats';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Cat[]>(this.baseUrl);
  }

}
