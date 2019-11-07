/*
*
* Question 1 - Detect 1 2 shifts overlap
* Solution by: Pablo Vieira
* 07/09/2019
*
* QUESTION 1 - Detect if 2 shifts overlap
*/

class Roster {
  // Overload constructor for Roster
  constructor(id, employee, department, startTime, endTime){
    this.id = id;
    this.employee = employee;
    this.department = department;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  getRosterDetails (){
    try{
      // Formatting timestamp
      let startTime = 'Incorrect date';
      let endTime = 'Incorrect date';
      // Only format if times are greater than zero
      if(this.startTime > 0)
        startTime = new Date(this.startTime);
      if(this.endTime > 0)
        endTime = new Date(this.endTime);

      // Build up a string with roster data to be returned
      let rosterFormatted = `Roster ID: ${this.id}`;
      rosterFormatted += `\nEmployee: ${this.employee}`;
      rosterFormatted += `\nDepartment: ${this.department}`;
      rosterFormatted += `\nStart time: ${startTime}`;
      rosterFormatted += `\nEnd time: ${endTime}`;

      return rosterFormatted;
    } catch (e) {
      // Simulating error handling
      console.error(`Error in function getRosterDetails: ${e.name} - ${e.message}`)
    }
  }

  deleteShiftData() {
    try{
      delete this.id;
      delete this.employee;
      delete this.department;
      delete this.startTime;
      delete this.endTime;

      console.log('Simulate shift cancelled');
      console.log(this.getRosterDetails());
    } catch (e) {
      // Simulating error handling
      console.error(`Error in function getRosterDetails: ${e.name} - ${e.message}`)
    }
  }

  verifyRosterEntries(newRoster){
    try{
      let newShiftApproved = false;
      // Verify if the new roster end date is not before of the start
      if(newRoster.endTime < newRoster.startTime)
        newShiftApproved = false
      else {
        /*First verify if new shift will be start at the end or after
          the current shift end time
          otherwise check if the new shift is before the current shift*/
        if(newRoster.startTime >= this.endTime)
          newShiftApproved = true;
        else if (newRoster.startTime < this.startTime && newRoster.endTime < this.startTime)
          newShiftApproved = true;
      }
      return newShiftApproved;
    } catch (e) {
      // Simulating error handling
      console.error(`Error in function getRosterDetails: ${e.name} - ${e.message}`)
    }
  }
}
