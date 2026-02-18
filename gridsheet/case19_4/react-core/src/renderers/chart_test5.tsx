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
    return (
        <StudyChart studyDataList={value}/>
    );
  },
};
