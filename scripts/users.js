/*
* Solution by: Pablo Vieira
* 07/09/2019
* Question 2 - Users hierarchy
 */


class User {
  // Overload constructor for User
  constructor(id, name, role){
    this._id = id;
    this._name = name;
    this._role = role;
  }

  /* Getters */
  get id(){
    return this._id;
  }
  get role(){
    return this._role;
  }
  get name(){
    return this._name;
  }
  /* Setters */
  set id(data){
    this._id = data;
  }
  set role(data){
    this._role = data;
  }
  set name(data){
    this._name = data;
  }

  /*
  Convert date unix to milliseconds
  @param arrayOfUsers Array of users objects
  @param arrayOfRoles Array of roles objects
*/
  findSubordinates(arrayOfUsers, arrayOfRoles){
    let subordinates = [];
    // Loop the array rules
    for(const role in arrayOfRoles){
      // Until find the parent equal to current user role
      if(arrayOfRoles[role].parent === this.role){
        let roleId = arrayOfRoles[role].id;
        // Then loop the users array
        for(const user in arrayOfUsers) {
          // To get the users are subordinated to roleId
          // And considering that the high level of management normally
          // Has the employees under they management as subordinates
          // E.g Administrators would have subordinates: Manager, Supervisor and Employee
          if(arrayOfUsers[user].role >= roleId)
            subordinates.push(arrayOfUsers[user]);
        }
      }
    }

    // Order the subordinates from high to low level of management
    subordinates.sort(function(a, b) {
      return a._role - b._role;
    });

    return subordinates;
  }
}

class Role {
  // Overload constructor for Role
  constructor(id, name, parent){
    this._id = id;
    this._name = name;
    this._parent = parent;
  }


  /* Getters */
  get id(){
    return this._id;
  }
  get name(){
    return this._name;
  }
  get parent(){
    return this._parent;
  }
  /* Setters */
  set id(data){
    this._id = data;
  }
  set name(data){
    this._name = data;
  }
  set parent(data){
    this._parent = data;
  }
}