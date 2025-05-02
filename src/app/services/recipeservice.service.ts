import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recip } from '../models/recip';

@Injectable({
  providedIn: 'root'
})
export class RecipeserviceService {
      private apiUrl="http://localhost:3000/recipes"
  constructor(private http:HttpClient) { }
  getRecipes():Observable<Recip> {
    return this.http.get<Recip>(this.apiUrl);
  }
  getRecidById(id:number):Observable<Recip>{
    return this.http.get<Recip>(`${this.apiUrl}/${id}`);
  }
  searchRecipes(nom: string): Observable<Recip[]> {
    return this.http.get<Recip[]>(`${this.apiUrl}?q=${nom}`);
  }
  filterByType(type: string): Observable<Recip[]> {
    return this.http.get<Recip[]>(`${this.apiUrl}?type=${type}`);
  }
}
