class Student {
  private studentRegNo: number;
  public studentName: string;
  protected studentDept: string;

  constructor(regNo: number, name: string, dept: string) {
    this.studentRegNo = regNo;
    this.studentName = name;
    this.studentDept = dept;
  }

  public displayDetails(): void {
    console.log(
      `RegNo: ${this.studentRegNo}, Name: ${this.studentName}, Dept: ${this.studentDept}`
    );
  }
}

class Person extends Student {
  constructor(regNo: number, name: string, dept: string) {
    super(regNo, name, dept);
  }

  public display(): void {
    console.log(`Name: ${this.studentName}, Dept: ${this.studentDept}`);
  }
}

const unionDisplay = (val: string | number | boolean) => {
  console.log("The value is a " + typeof val);
};

let myTuple: [number, string, boolean, Array<number>];
myTuple = [7, "Archie", true, [1, 2, 3, 4, 5]];


const aks = new Person(140, "Archie", "IT");
aks.display();


unionDisplay("Archie");
unionDisplay(7)
unionDisplay(true)

console.log(myTuple);
