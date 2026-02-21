import { solveTable } from "../solver";
import { Table } from "../../lib/table";
import { BaseFunction } from "./__base";
import { ensureNumber } from "./__utils";
import { FormulaError } from "../evaluator";

type Dict = {
	key: string;
	value: number;
}

export class DictFunction extends BaseFunction {
  example = "DICT(A2:A100, 101)";
  helpText = ["Returns the sum of a series of numbers or cells."];
  helpArgs = [
    { name: "value1", description: "First number or range." },
    {
      name: "value2",
      description: "Additional numbers or ranges",
      optional: true,
      iterable: true,
    },
  ];

  protected validate() {

    if (this.bareArgs.length === 0) {
      throw new FormulaError("#N/A", "One or more arguments are required.");
    }
    const spreaded: number[] = [];
    this.bareArgs.forEach((arg) => {
	    
      if (arg instanceof Table) {
        spreaded.push(
          ...solveTable({ table: arg })
            .reduce((a, b) => a.concat(b))
            .map((v) => ensureNumber(v, { ignore: true })),
        );
        return;
      }
      
      //spreaded.push(ensureNumber(arg, { ignore: true }));
    });
    this.bareArgs = spreaded;
   
  }

  protected main(...values: Dict[]) {
    if (values.length === 0) {
      return [];
    }
    //return values.reduce((a, b) => a + b);
    //return values.toString();
    //return [999];
    //console.log(values);

    //return values;
    console.log("*******", values.length);

    return [
	    /*
             { key:"A", value: values[1]},
             { key:"B", value: values[3]},
             { key:"C", value: values[5]},
             { key:"D", value: values[7]},
	     */
             { key: values[0], value: values[1]},
             { key: values[2], value: values[3]},
             { key: values[4], value: values[5]},
             { key: values[6], value: values[7]},
          ]
  }
}
