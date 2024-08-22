import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {KhodamModel} from "../models/khodam-model";

@Injectable({
  providedIn: 'root'
})
export class KhodamService {

  private url: string = 'assets/list-khodam.json'

  constructor(private http: HttpClient) {
  }

  getKhodamList(): Observable<KhodamModel[]> {
    return this.http.get<KhodamModel[]>(this.url)
  }
}
