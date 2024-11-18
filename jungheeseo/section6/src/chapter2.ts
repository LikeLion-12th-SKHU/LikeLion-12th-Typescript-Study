/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  // 필드
  public name: string;
  protected age: number;
  public position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 매서드
  work() {
    console.log("일함");
  }
}

const employee = new Employee("홍길동", 27, "developer");
employee.name = "홍길동동";
// employee.age = 30;
employee.position = "디자이너";

class ExecutiveOfficer extends Employee {
  //필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 매서드
  func() {
    this.name;
  }
}
