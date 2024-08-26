class Employee {
    constructor(emp_id,emp_name,emp_depth,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_depth=emp_depth;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;

    }
}
const emp_anil =new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha =new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi =new Employee(55,"Rishi","Finanace",47000,"TCS");
const emp_sonali =new Employee(66,"Sonali","Finanace",45000,"Infy");
const emp_monika =new Employee(77,"Monika","IT",40000,"Wipro");
const emp_vinayak =new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahesh =new Employee(99,"Mahesh","HR",85000,"Infy");

const arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinayak,emp_mahesh];
console.log("==========1====================");


for (let elements of arrayEmployees) {
    if(elements.emp_company=="TCS")
    console.log(`The employee working in TCS its name is:${elements.emp_name},and 
 company name is:${elements.emp_company}`);
}


console.log("============2========================");
for (let element of arrayEmployees){
if(element.emp_depth=="Finanace")

 console.log(`Employee Department is: ${element.emp_depth} , and Employee
 Name is:${element.emp_name}`);
 
}

console.log("==========3======================");
for (let element of arrayEmployees) {
    if(element.emp_name.startsWith("R"))
        console.log(`Employee Name start with "R" :${element.emp_name}`);
        
}

console.log("==============4=================");
for (let element of arrayEmployees) {
    if(element.emp_salary>75000)
        console.log(`Employee Name is:${element.emp_name}and Company Name:${element.emp_company} and Salary is:${element.emp_salary}`);
        
}

console.log("===========5=====================");
for (let element of arrayEmployees) {
    if(element.emp_salary>=50000&& element.emp_depth=="IT")
        console.log(`Employee detail is :Employee id: ${element.emp_id} , Employee Name: ${element.emp_name} , Employee Department: ${element.emp_depth}, Employee Salary:  ${element.emp_salary}  ,Employee Company: ${element.emp_company}`);
        
}

console.log("=============6==================");
for (let element of arrayEmployees) {
    if(element.emp_company=="Infy")
    console.log(`Employee detail is :Employee id: ${element.emp_id} , Employee Name: ${element.emp_name} , Employee Department: ${element.emp_depth}, Employee Salary:  ${element.emp_salary}  ,Employee Company: ${element.emp_company}`);

}
