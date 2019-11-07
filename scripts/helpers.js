/*
  Convert date unix to milliseconds
  @param dateInput integer unix date
*/
function dateConvertHelper (dateInput) {
  // Formatting timestamp
  const milliseconds = 1000;
  if(dateInput > 0)
    return dateInput * milliseconds;
  else
    return dateInput;
}

/*
  Convert date unix to milliseconds
  @param objRoster1 Roster Object
  @param objRoster2 Roster Object
*/
function simulateShifts (objRoster1, objRoster2) {
  let isShiftApproved = objRoster1.verifyRosterEntries(objRoster2);
  // if shift was approved then print data
  if(isShiftApproved){
    let rosterDetailsId1 = objRoster1.getRosterDetails();
    let rosterDetailsId2 = objRoster2.getRosterDetails();
    printData(rosterDetailsId1);
    printData(rosterDetailsId2);
    printNewLine();
  } else {
    // Otherwise just print current shift and delete shift 2
    let rosterDetailsId1 = objRoster1.getRosterDetails();
    printData(rosterDetailsId1);
    objRoster2.deleteShiftData();
  }
}

function printNewLine () {
  console.log('\n--------------------------------------\n\n');
}

function printData (data) {
  console.log(data);
}