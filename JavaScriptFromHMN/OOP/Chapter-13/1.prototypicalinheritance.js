                        //******* Prototycial inheritance******
                



// GO TO CONSOLE & TYPE THESE TO UNDERSTAND

// var obj = {}
// var obj2 = new Object()


// obj
// obj2                // sobar  Object prototype common


// obj.__proto__ == obj2.__proto__     // true ... browser's console e ashbe

// *********** TO GET PROTOTYPE ***********

// Object.getPrototypeOf(obj)

// Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj2)

                // ********** `Multi level inheritance` ************

var arr = []

var str = new String('str')

       
       

function Person (name) {
    this.name = name
} 

var p1 = new Person('Hasib')
console.log(p1) 