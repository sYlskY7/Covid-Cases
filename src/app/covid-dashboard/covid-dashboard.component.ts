import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-covid-dashboard',
  templateUrl: './covid-dashboard.component.html',
  styleUrls: ['./covid-dashboard.component.css']
})
export class CovidDashboardComponent implements OnInit {
  globalData: any;
  countryData: any;
  countries: any[] = []; // Arreglo de países disponibles
  selectedCountry: string = ''; // País seleccionado en el desplegable

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    // Obtener datos globales de COVID-19
    this.covidService.getGlobalData().subscribe(data => {
      this.globalData = data;
    });

    // Obtener datos de todos los países disponibles
    this.covidService.getAllCountries().subscribe(data => {
      this.countries = data;
    });

    // Ejemplo: Obtener datos para un país específico al inicio (ej. 'USA')
    this.loadCountryData('USA');
  }

  loadCountryData(countryCode: string): void {
    this.covidService.getCountryData(countryCode).subscribe(data => {
      this.countryData = data;
    });
  }

  onCountryChange(): void {
    if (this.selectedCountry) {
      this.loadCountryData(this.selectedCountry);
    } else {
      // Si no se ha seleccionado ningún país, muestra datos globales
      this.countryData = null; // Limpiar los datos del país seleccionado
      this.covidService.getGlobalData().subscribe(data => {
        this.globalData = data;
      });
    }
  }
}
