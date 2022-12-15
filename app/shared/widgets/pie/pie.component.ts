import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Drives Utilization'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'Drives',
          colorByPoint: true,
          data: [{
              name: 'C drive',
              y: 61.41,
              sliced: true,
              selected: true
          }, {
              name: 'D drive',
              y: 11.84
          }, {
              name: 'E drive',
              y: 10.85
          }, {
              name: 'HDD',
              y: 4.67
          }, {
              name: 'Ext HDD',
              y: 4.18
          }, {
              name: 'Mock-1',
              y: 1.64
          }, {
              name: 'Mock-2',
              y: 1.6
          }, {
              name: 'Mock-3',
              y: 1.2
          }, {
              name: 'Mock-4',
              y: 2.61
          }]
      }]
  };

    HC_exporting(Highcharts);
    
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  
  }

}
