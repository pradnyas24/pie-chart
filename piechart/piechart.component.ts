import { Component, OnChanges, ViewChild, ElementRef,OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})


export class PiechartComponent implements OnInit {

    public pieChartLabels:string[] = ['Transaction Pass', 'Transaction Fail'];
    public pieChartData:number[] = [300, 500];
    public pieChartType:string = 'pie';
   // public pieColors = ['orange','red','green'];
    public pieChartColors:  {}[]          = [ { backgroundColor: ['orange', 'green'] } ];

  constructor() 
  {}

  ngOnInit() {
  }

  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
