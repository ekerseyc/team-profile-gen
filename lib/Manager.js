// instructor provided class
class Manager extends Employee{
    constructor(name, id, email, office){
      super(name, id, email)
      this.office = office;
      this.role = 'Manager'
    }
    getOffice(){
      return this.office;
    }
  }
module.exports = Manager;