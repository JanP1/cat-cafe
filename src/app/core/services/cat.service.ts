import { Injectable } from "@angular/core";
import { Cat } from "../../model/cat.model";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private baseUrl = environment.apiUrl + '/cats';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Cat[]>(this.baseUrl);
  }

}
