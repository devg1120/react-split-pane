import type { RenderProps } from "./core";
import BarChartComponent from './chart_components/BarChartComponent';
//import BarMultiChartComponent from './chart_components/BarMultiChartComponent';
import BarChartWithMultiXAxis2  from  './chart_components/BarChartWithMultiXAxis2';


import { useState } from 'react';

export const ChartTest10RendererMixin  = {
  array({ value, sync, table, point }: RenderProps<array>): any {
  //object({ value, sync, table, point }: RenderProps<object>): any {
  /*
     console.log(point);
     console.log(table.getId(point));
     console.log(table.getCellByPoint(point));
     let id = table.getId(point);
     let address = table.getAddressById(id);
     console.log(id, address);
     //console.dir(table.wire.data[id]);
     let cell =table.getCellByPoint(point);
     console.dir(cell);
*/

/*
     let cell =table.getCellByPoint(point);
     //console.log(cell.collsize);
     //console.log(cell.rowsize);
     let w = table.getCellByPoint({ y:0, x:point.x}).width ;
     let h = table.getCellByPoint({ y:point.y, x:0}).height;
     let width  = w *4;
     let height = h * 5;
*/
   let bars = [
        { dataKey:"pv",  fill:"#8884dB"},
        //{ dataKey:"uv",  fill:"#82ca9d"},
        { dataKey:"uv",  fill:"red"},
   ];




     let width  = 0;
     let height = 0;  
     let cell =table.getCellByPoint(point);
     for (let i = 0; i < cell.colsize ; i++) {
          width += table.getCellByPoint({ y:0, x:point.x + i}).width ;
     }
     for (let i = 0; i < cell.rowsize ; i++) {
          height += table.getCellByPoint({ y:point.y + i, x:0}).height;
     }

    /*
         let id = table.getId({x:8,y:13});
         let address = table.getAddressById(id);
         console.log(id, address);
         console.log(table.wire.data[id].value);
	 */
         //const { cdata, setCdata } = useState(table.wire.data[id].value);
         //console.log(cdata);
         //console.log(value.data[0]);
	 //value.data[0].A = cdata;
	
       return (
           <BarChartWithMultiXAxis2 table={table} bars={bars} data={value} width={width} height={height} />
       );
  },
};
