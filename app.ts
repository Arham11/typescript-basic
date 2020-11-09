//module loader takes care of all the import and export

import { IStudent } from './interface'


enum languageKnown {
    English, Hindi, Marathi
}
console.log(languageKnown)
let students: IStudent = {
    name: "happiness",
    age: 26,
    phoneNo: 7,
    language: languageKnown[languageKnown.English],
}

let studentsList: IStudent[] = [
    { name: "Deepika", age: 26, phoneNo: 1116, language: languageKnown[languageKnown.English] },
    { name: "Arham", age: 26, phoneNo: 11, language: languageKnown[languageKnown.English] },
    { name: "Shehmeen", age: 24, phoneNo: 11, language: languageKnown[languageKnown.English] }
]

studentsList.push(students)

// for (let i = 0; i < studentsList.length; i++) {
//     let element = studentsList[i];
//     console.log(element)
// }

function getStudents(students: IStudent[]) {
    students.forEach(function (element) {
        console.log(element.name)
    })
}
getStudents(studentsList)

function getInfo(info: string = "happy") {
    console.log(info)
}



//rest parameters
function getNumber(...nums: number[]) {
    nums.forEach(function (element) {
        console.log(element)
    })
}
getNumber(1, 2, 3, 4, 5)






//======================function advance starts==============================
let studentName = function (firstName: string, lastName: string) {
    return (firstName + " " + lastName)
}
console.log(studentName("Deepika", "Bane"))



let school = (firstName: string, lastName: string) => { return firstName + " " + lastName }
console.log(school("St", "Xaviers"))





//=============================== class ======================================
//class are pubic

// class StudentName {
//     private _firstN
//     private _lastN
//     constructor(_firstN, _lastN) {
//         this._firstN = _firstN;
//         this._lastN = _lastN;
//     }
//     getFullName(): string {
//         return this._firstN + this._firstN
//     }
// }

// let s = new StudentName("Arzoo", "tisekar")
// //invoke
// console.log(s.getFullName())



class StudentName {

    constructor(private _firstN, private _lastN) {
    }
    getFullName(): string {
        return this._firstN + this._firstN
    }
}

let s = new StudentName("Arzoo", "tisekar")
//invoke
console.log(s.getFullName())