import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-covid-charts',
  templateUrl: './covid-charts.component.html',
  styleUrls: ['./covid-charts.component.css']
})
export class CovidChartsComponent implements OnInit {
  chart: any;

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.covidService.getGlobalData().subscribe(data => {
      // Renderizar gráfico de barras para casos totales, recuperaciones y muertes
      this.renderBarChart(data);
    });
  }

  renderBarChart(data: any): void {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Casos Totales', 'Recuperaciones', 'Muertes'],
        datasets: [{
          label: 'COVID-19 Global',
          data: [data.cases, data.recovered, data.deaths],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(255, 159, 64, 0.5)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 159, 64)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => value.toLocaleString(),
            }
          }
        }
      }
    });
  }
  
}
