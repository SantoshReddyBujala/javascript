class PrintName {
  //#personName;
  constructor(personName) {
    this.personName = personName;
  }
  printName() {
    console.log(`Person Name: ${this.personName}`);
  }
}

let personName = new PrintName("Santosh Reddy Bujala");

personName.printName();
