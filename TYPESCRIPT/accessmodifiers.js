var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(regNo, name, dept) {
        this.studentRegNo = regNo;
        this.studentName = name;
        this.studentDept = dept;
    }
    Student.prototype.displayDetails = function () {
        console.log("RegNo: ".concat(this.studentRegNo, ", Name: ").concat(this.studentName, ", Dept: ").concat(this.studentDept));
    };
    return Student;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(regNo, name, dept) {
        return _super.call(this, regNo, name, dept) || this;
    }
    Person.prototype.display = function () {
        console.log("Name: ".concat(this.studentName, ", Dept: ").concat(this.studentDept));
    };
    return Person;
}(Student));
var unionDisplay = function (val) {
    console.log("The value is a " + typeof val);
};
var myTuple;
myTuple = [7, "Archie", true, [1, 2, 3, 4, 5]];
var aks = new Person(140, "Archie", "IT");
aks.display();
unionDisplay("Archie");
unionDisplay(7);
unionDisplay(true);
console.log(myTuple);
