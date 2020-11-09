"use strict";
//module loader takes care of all the import and export
exports.__esModule = true;
var languageKnown;
(function (languageKnown) {
    languageKnown[languageKnown["English"] = 0] = "English";
    languageKnown[languageKnown["Hindi"] = 1] = "Hindi";
    languageKnown[languageKnown["Marathi"] = 2] = "Marathi";
})(languageKnown || (languageKnown = {}));
console.log(languageKnown);
var students = {
    name: "happiness",
    age: 26,
    phoneNo: 7,
    language: languageKnown[languageKnown.English]
};
var studentsList = [
    { name: "Deepika", age: 26, phoneNo: 1116, language: languageKnown[languageKnown.English] },
    { name: "Arham", age: 26, phoneNo: 11, language: languageKnown[languageKnown.English] },
    { name: "Shehmeen", age: 24, phoneNo: 11, language: languageKnown[languageKnown.English] }
];
studentsList.push(students);
// for (let i = 0; i < studentsList.length; i++) {
//     let element = studentsList[i];
//     console.log(element)
// }
function getStudents(students) {
    students.forEach(function (element) {
        console.log(element.name);
    });
}
getStudents(studentsList);
function getInfo(info) {
    if (info === void 0) { info = "happy"; }
    console.log(info);
}
//rest parameters
function getNumber() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (element) {
        console.log(element);
    });
}
getNumber(1, 2, 3, 4, 5);
//======================function advance starts==============================
var studentName = function (firstName, lastName) {
    return (firstName + " " + lastName);
};
console.log(studentName("Deepika", "Bane"));
var school = function (firstName, lastName) { return firstName + " " + lastName; };
console.log(school("St", "Xaviers"));
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
var StudentName = /** @class */ (function () {
    function StudentName(_firstN, _lastN) {
        this._firstN = _firstN;
        this._lastN = _lastN;
    }
    StudentName.prototype.getFullName = function () {
        return this._firstN + this._firstN;
    };
    return StudentName;
}());
var s = new StudentName("Arzoo", "tisekar");
//invoke
console.log(s.getFullName());
//# sourceMappingURL=app.js.map