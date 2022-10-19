import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss']
})
export class EchartsComponent  {
  chartOption: EChartsOption = {
    xAxis: {
      name:'Days',
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      name:'Value',
      type: 'value',
    },
    legend: {
      data: ['Rainfall', 'Evaporation']
    },
    series: [
      {
        name:'Rainfall',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'bar',
      },
      {
        name:'Evaporation',
        data: [700, 600, 690, 1000, 400, 685, 1500],
        type: 'bar',
      },
    ],
  };

}
