# JSGym
JavaScript functions to calculate useful metrics for weight training. 

Built for use in Google Sheets, this project is a single file. Just paste it into the Script editor of a GSheet. 

Sample usage in a Gsheet macro:
```
function outputResults() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var myKnownMax = spreadsheet.getRange("A2").getValue();
  var myWeight = spreadsheet.getRange("B2").getValue();
  var myReps = spreadsheet.getRange("C2").getValue();
  var myTonnage = calcTonnage (myWeight, myReps);
  var myIntensity_result = calcIntensity (myWeight, myKnownMax);
  var myCalculatedMax= calcOneRepMax (myWeight, myReps);
  var myINOL = calcINOL (myWeight, myReps, myKnownMax);
  var myRelativeTonnage = calcRelativeTonnage (myWeight, myReps, myKnownMax);
  var myMaxReps = calcMaxReps (myWeight, myKnownMax);
  var myRIR = calcRIR (myWeight, myReps, myKnownMax);
  var myEffectiveReps = calcEffectiveReps (myWeight, myReps, myKnownMax);
  
  spreadsheet.getRange("D2").setValue(myTonnage);
  spreadsheet.getRange("E2").setValue(myINOL);
  spreadsheet.getRange("F2").setValue(myCalculatedMax);
  spreadsheet.getRange("G2").setValue(myIntensity_result);
  spreadsheet.getRange("H2").setValue(myRelativeTonnage);
  spreadsheet.getRange("I2").setValue(myMaxReps);
  spreadsheet.getRange("J2").setValue(myRIR);
  spreadsheet.getRange("K2").setValue(myEffectiveReps);

}
```
