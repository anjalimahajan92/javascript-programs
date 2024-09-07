class Person{
    constructor(fullname,age,profession){
        this.fullname=fullname;
        this.age=age;
       this.profession=profession;
    }
}
class Student extends Person{
    constructor(graduation,fullname,age,profession){
    super(fullname,age,profession);
    this.graduation=graduation;
    }

}
let stdElon=new Student("BE","Elon",54,"Student");
console.log(stdElon);
