const Employee = require("../models/empleados");

const employee = {};

employee.getEmployees = async (req, res, next) => {
  const employees = await Employee.find();
  res.json(employees);
};




employee.createEmployee = async (req, res, next) => {
  const employee = new Employee({
    id: req.body.id,
    name: req.body.name,
    ocupacion: req.body.ocupacion,
  });
  await employee.save();
  res.json({ status: "Employee created" });
};





employee.getEmployee = async (req, res, next) => {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.json(employee);
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