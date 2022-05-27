// 1. Write one example explaining how you can write a callback function ?

const message = function(){
    console.log("Execute this message after 3 sec.");
}
setTimeout(message,3000); //this execute the message after 3 sec but not before 3 sec so this the call back function and it is asynchronus function or evaluation.  .


// using arrow constructor:

setTimeout(()=> {
    console.log("Exexute this message after 3 sec.")
},3000); 


// -----------------------------------------------------------------------------

// 2. "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 
//      3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"


const getNumbers = () =>{
    setTimeout(()=>{
        console.log(1);

        setTimeout(()=>{
            console.log(2);
        
        
        setTimeout(()=>{
            console.log(3);

        setTimeout(()=>{
            console.log(4);

        setTimeout(()=>{
            console.log(5);
        
        setTimeout(()=>{
            console.log(6);

        setTimeout(()=>{
            console.log(7);
        },7000);
        },6000);
    },5000);
   },4000);
 },3000);
},2000);
},1000);

}

// getNumbers();

// 3. "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 
//        3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
let promise = new Promise((resolve,reject)=> {
    resolve();
})

promise
.then(()=>{
    setTimeout(() => {
        console.log(1);
    },1000);
})

.then(()=>{
    setTimeout(() => {
        console.log(2);
    },2000);
})

.then(()=>{
    setTimeout(() => {
        console.log(3);
    },3000);
})

.then(()=>{
    setTimeout(() => {
        console.log(4);
    },4000);
})

.then(()=>{
    setTimeout(() => {
        console.log(5);
    },5000);
})

.then(()=>{
    setTimeout(() => {
        console.log(6);
    },6000);
})

.then(()=>{
    setTimeout(() => {
        console.log(7);
    },7000);
})

// 4. Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing 
//    is passed then it should go to reject state and catch the error and print Promise Rejected 

    const getStudentDetails=  (data) => {
        return new Promise((resolve,reject)=>{
           setTimeout((data) => {
               let studentDetails = {
                   name : "Niraj",
                   age : 24,
               }
            resolve(`The name of the Student is ${studentDetails.name} and the age of the student is ${studentDetails.age}`,data);
            reject("No data fetch error")
               
           },1000,data);
        })
    }

    getStudentDetails("Hi")
    .then((data) =>{
        console.log(data);
    })

    .catch ((err)=>{
        console.log("Error fetch :", err)
    })


// 5. Create examples to explain callback function

    
function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);

// 6. Create examples to explain callback hell function

const getEmployeeDetail = () =>{
    setTimeout(() => {
        console.log("Fetching employee detail");
       let id = ("12345678") 
       console.log(id);
    
    setTimeout(() => {
        let employeeDetails = {
            name : "Shivam",
            age : 28,
          
        }
        console.log(`The name of the Employee is ${employeeDetails.name},age of the employee is ${employeeDetails.age} `);

    setTimeout(() => {
        employeeDetails.gender = "Male"
        console.log(`The name of the Employee is ${employeeDetails.name},age of the employee is ${employeeDetails.age} and gender of employeeis ${employeeDetails.gender}`);

    setTimeout(() => {
        employeeDetails.designation = "Developer"
        console.log(`The name of the Employee is ${employeeDetails.name},age of the employee is ${employeeDetails.age} and gender of 
        employee is ${employeeDetails.gender} and employee work as a ${employeeDetails.designation}`);

       });
      },2000);
     },2000);
    },2000);
} 


getEmployeeDetail();

// 7 . Create examples to explain promises function

const getEmployeeID = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let id = 12345670;
        resolve(id);//resolve catch by .then method
        reject("The data isn't formed");//reject catch by .catch method
    }, 2000);
})

//promise consuming-used for consumotion of promise
getEmployeeID
    .then((id)=>{//id is given as parameter
        console.log("ID:",id);

    })
    .catch((err)=>{
        console.log("Error Message :",err);

    })
    .finally(()=>{
        console.log("END");
    })

// 8. Create examples to explain async await function

const fn1 = () => {
    return "Iam function One"
}
const fn3 = () => {
    return "Iam function Three"
}
const fn2 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Iam function Two")//in Promise we give resolve
        }, 3000);
    })
}

const callFns = async () => { //----------Here we give async
    
    let res1 = fn1();
    console.log(res1);//Iam function One

    let res2 = await fn2();//----------Here we give await,JS wait for 3s,and o/p is printed--here it wait bcoz,we given promise in ftn2
    console.log(res2);//Iam function Two

    let res3 = fn3();
    console.log(res3);//Iam function Three


}
callFns()

//9. Create examples to explain promise.all function

const promise1 = Promise.resolve(5);
const promise2 = 42;
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve,2000,"Pooja");
});

Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
});

// The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.