const Employee = require("../models/empleados");

const employee = {};

employee.getEmployees = async (req, res, next) => {
  const employees = await Employee.find();
  res.json(employees); 
};
  
 
employee.createEmployee = async (req, res, next) => {
  var result = await getEmployeemail(req)
  if(result){
    res.send(true) 
 
  } else {
    const employee = new Employee({
      name: req.body.name, 
      apellido: req.body.apellido, 
      telefono: req.body.telefono,
      dni: req.body.dni,
      datanaixement: req.body.datanaixement, 
      email: req.body.email,
      password: req.body.password,
      ocupacion: req.body.ocupacion
    });
    await employee.save();
    res.json({ status: "Employee created" });

  }
}; 


employee.getEmployee = async (req, res, next) => {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.json(employee);
  };



  const getEmployeemail = async (req, res) => {
    const employee = await Employee.findOne( {email: req.body.email} );
    if(employee){
      return true
    } else {
      return false
    }
  };


  employee.editEmployee = async (req, res, next) => {
    const { id } = req.params;
    await Employee.findByIdAndUpdate(id, {$set: req.body});
    res.json({ status: "Employee Updated" });
  };
  

employee.deleteEmployee = async (req, res, next) => {
  await Employee.findByIdAndRemove(req.params.id);
  res.json({ status: "Employee Deleted" });
};

module.exports = employee;

