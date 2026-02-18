import type { RenderProps } from "./core";
import StudyChart from './chart_components/StudyChart';

/*
export const ChartTest3RendererMixin: RendererMixinType = {
  string({ value, cell }): any {
    return `r3----${value}---`;
  },
};
*/

        //type="checkbox"

//export const ChartTest3RendererMixin: RendererMixinType = {
/*
export const ChartTest4RendererMixin  = {
  bool({ value, sync, table, point }: RenderProps<boolean>): any {
    return (
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => {
          if (sync) {
            sync(
              table.write({ point, value: e.currentTarget.checked.toString() }),
            );
          }
          e.currentTarget.blur();
        }}
      />
    );
  },
};
*/
/*
export const ChartTest5RendererMixin  = {
  array({ value, sync, table, point }: RenderProps<array>): any {
    return (
	    <div>
	      <button>{value[0].date}</button>
	      <button>{value[1].date}</button>
	      <button>{value[2].date}</button>
	    </div>
    );
  },
};
*/

export const ChartTest5RendererMixin  = {
  array({ value, sync, table, point }: RenderProps<array>): any {
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

     let width  = 0;
     let height = 0;  
     let cell =table.getCellByPoint(point);
     for (let i = 0; i < cell.colsize ; i++) {
          width += table.getCellByPoint({ y:0, x:point.x + i}).width ;
     }
     for (let i = 0; i < cell.rowsize ; i++) {
          height += table.getCellByPoint({ y:point.y + i, x:0}).height;
     }



    return (
        <StudyChart studyDataList={value} width={width} height={height} />
    );
  },
};
