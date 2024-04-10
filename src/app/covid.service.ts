import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  private baseUrl = 'https://disease.sh/v3/covid-19';

  constructor(private http: HttpClient) { }

  // Obtener datos globales de COVID-19
  getGlobalData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  // Obtener datos de COVID-19 por país
  getCountryData(countryCode: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/countries/${countryCode}`);
  }

  // Obtener la lista de todos los países disponibles
  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/countries?allowNull=false`);
  }
}
