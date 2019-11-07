/*
*
* Question 1 - Detect 1 2 shifts overlap
* Solution by: Pablo Vieira
* 07/09/2019
*
*QUESTION 1 - Detect if 2 shifts overlap
Our customers use Deputy in order to build the weekly schedule for the shifts of their employees. An
object which represents such a scheduled shift for a given employee #1 may look like this:
var objRoster1 = {
Id: 1
, Employee: 1
, Department: 1
, StartTime: 1508450400
, EndTime: 1508479200
};
The above record defines that employee #1 is supposed to work in department #1 from 1508450400
until 1508479200 (those 2 integers are actually UNIX timestamps which correspond to 9 AM, 5 PM on
2017-10-20 in Sydney - UTC +11).

We have a logical constraint which dictates that a person can only work in one shift at a given time.
This means that if we wanted to save a new shift objRoster2 for employee #1, we would need to
make sure that it does not overlap with objRoster1 in any way.

Can you come up with an algorithm which can check whether a new objRoster2 with StartTime x,
EndTime y may overlap objRoster1?
You may use pseudo-code or any language that you feel comfortable with. Or you may even try to
make a drawing to explain your logic.
 *  */

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
      /*First verify if new shift will be start at the end or after
        the current shift end time
        otherwise check if the new shift is before the current shift*/
      if(newRoster.startTime >= this.endTime)
        newShiftApproved = true;
      else if (newRoster.startTime < this.startTime)
        newShiftApproved = true;

      return newShiftApproved;
    } catch (e) {
      // Simulating error handling
      console.error(`Error in function getRosterDetails: ${e.name} - ${e.message}`)
    }
  }
}
