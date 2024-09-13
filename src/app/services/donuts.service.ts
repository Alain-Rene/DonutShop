import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutModel, Result, DonutDetail } from '../models/donuts';

@Injectable({
  providedIn: 'root'
})
export class DonutsService {

  
  constructor(private http:HttpClient) { }

  getDonuts():Observable<DonutModel>{
    return this.http.get<DonutModel>("https://grandcircusco.github.io/demo-apis/donuts.json")
  }

  getDonutById(id: number):Observable<DonutDetail>{
    return this.http.get<DonutDetail>(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`);
  }
}
