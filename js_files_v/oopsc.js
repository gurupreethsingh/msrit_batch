// oops concept

// class Student
// {
//     // default
//   constructor(name,address,course)
//   {
//     this.name=name;
//     this.address=address;
//     this.course=course;
//     console.log(`Student ${this.name} created succesfully.`);
//   }
// }

// // make an object of the class
// const s1= new Student("raj","bangalore","react");
// console.log(s1.name);
// console.log(s1.address);
// console.log(s1.course);

// const s2= new Student("raju","delhi","java");
// console.log(s2.name);
// console.log(s2.address);
// console.log(s2.course);


class Bank
{
    constructor(name,address,balance,pin)
    {
        this.name=name;
        this.address=address;
        this.balance=balance;
        this.pin=pin;
        console.log(`Account created for ${this.name}`);
    }
    
    show_details=()=>
    {
        console.log(`Atm Pin is ${this.pin}`);
    }
    show_balance=()=>
    {
        console.log(`Account Holder :${this.name}\nCurrent Balance :${this.balance}`)
    }
    deposit=(amount)=>
    {
        if(amount>0)
        {
            this.balance=this.balance+amount;
            console.log(`${amount} has been succesfully deposited`);
            this.show_balance();
        }
        else
        {
            console.log("Enter amount more than zero");
 
        }

    }
    withdraw=(amount)=>
    {
        if(amount<this.balance)
        {
            this.balance=this.balance-amount;
            console.log(`${amount} has been debited`);
            this.show_balance();
        }
        else
        {
            console.log("Insufficient Balance");
 
        
        }
    }
}
const p1 = new Bank("raj1" , "bangalore" , 5000, 1234);
const p2 = new Bank("raj2" , "Delhi" , 10000, 1234);

p1.show_balance();
p2.show_balance();
p1.deposit(500);
p2.withdraw(2000);