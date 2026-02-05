import React from 'react';
import ReactDOM from 'react-dom';
import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import './App.css';

//import {data as cell_data} from "./data/cell";
import {celldata as celldata_basic} from "./data/basic";
import {sheetdata as sheetdata_basic} from "./data/cell";
import {sheetdata as sheetdata_freeze} from "./data/freeze";
import {sheetdata as sheetdata_formula} from "./data/formula";
import {sheetdata as sheetdata_protected} from "./data/protected";
import {sheetdata as sheetdata_verification} from "./data/dataVerification";

const data = [
    sheetdata_basic,
    sheetdata_freeze,
    sheetdata_formula,
    sheetdata_protected,
    sheetdata_verification,
    {
        "name": "Cell", //Worksheet name
        "color": "", //Worksheet color
        "id": 0, //Worksheet id
        "status": 1, //Worksheet active status
        "order": 0, //The order of the worksheet
        "hide": 0,//Whether worksheet hide 
        "row": 36, //the number of rows in a sheet
        "column": 18, //the number of columns in a sheet
        "defaultRowHeight": 19, //Customized default row height
        "defaultColWidth": 73, //Customized default column width
        //"celldata":   [{ r: 3, c: 3, v: "123" }], //Initial the cell data
        //"celldata":   [celldata_basic], //Initial the cell data
        "celldata":   celldata_basic, //Initial the cell data
        "config": {
            "merge":{}, //merged cells
            "rowlen":{}, //Table row height
            "columnlen":{}, //Table column width
            "rowhidden":{}, //hidden rows
            "colhidden":{}, //hidden columns
            "borderInfo":{}, //borders
            "authority":{}, //Worksheet protection
        },
        "scrollLeft": 0, //Left and right scroll bar position
        "scrollTop": 315, //Up and down scroll bar position
        "luckysheet_select_save": [], //selected area
        "calcChain": [],//Formula chain
        "isPivotTable":false,//Whether is pivot table
        "pivotTable":{},//Pivot table settings
        "filter_select": {},//Filter range
        "filter": null,//Filter configuration
        "luckysheet_alternateformat_save": [], //Alternate colors
        "luckysheet_alternateformat_save_modelCustom": [], //Customize alternate colors	
        "luckysheet_conditionformat_save": {},//condition format
        "frozen": {}, //freeze row and column configuration
        "chart": [], //Chart configuration
        "zoomRatio":1, // zoom ratio
        "image":[], //image
        "showGridLines": 1, //Whether to show grid lines
    },
    {
        "name": "Sheet2",
        "color": "",
        "id": "1",
        "status": 0,
        "order": 1,
        "celldata": [],
        "config": {}
    },
    {
        "name": "Sheet3",
        "color": "",
        "id": "2",
        "status": 0,
        "order": 2,
        "celldata": [],
        "config": {},
    }
];


function App() {

// Configuration item
const settings = {
     //data: [{ name: 'Sheet1', celldata: [{ r: 0, c: 0, v: null }] }], // sheet data
     //data: [{ name: 'Sheet1', celldata: [{ r: 0, c: 0, v: null }, { r:3 , c:3, v:123}] }], // sheet data
     data: data, // sheet data
     //onChange: (data) => {}, // onChange event
     lang:'ja' // set language
     // More other settings...
}

  return (
/*
  <Workbook data={[{ name: "Sheet1" }]} />
*/

  <Workbook {...settings} />


  );
}

export default App

