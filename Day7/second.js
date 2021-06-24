var student = {
    "name":"Sarah",
    "sclass":"XII",
    rno:21
};

console.log("Before deletion: ");
console.log(student);
delete student.rno;
console.log("After deletion: ");
console.log(student);