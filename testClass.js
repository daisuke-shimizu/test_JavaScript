// javascript本格入門 5.5.1 クラスを定義する　より
class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() { 
    return this.firstName + ' ' + this.lastName;
  }
}



let m = new Member('daisuke', 'shimizu');

console.log(m.getName());


class BusinessMember extends Member {
  constructor(firstName, lastName, clazz) {
    super(firstName, lastName);
    this.clazz = clazz;
  }

  getName() {
    return super.getName() + ' ' + this.clazz;
  }

  work() {
    return this.getName() + ' is working now';
  }
}

let bm = new BusinessMember('daisuke', 'shimizu', 'CEO');

console.log(bm.getName());
console.log(bm.work());