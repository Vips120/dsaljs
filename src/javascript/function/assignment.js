function studentGrade() {
    this.storeData = [];
   this.grade = displayStudentAvg;
   this.storeGrade = storegrade;
};
 function storegrade(temp) {
this.storeData.push(temp);
 };

function displayStudentAvg() {
 let avg = 0;
 let total = 0;
 for(let i=0; i < this.storeData.length; i++) {
      total +=this.storeData[i];
 }
 avg = total / this.storeData.length;
 return avg; 
};
let g = new studentGrade();
 g.storeGrade(40);
 g.storeGrade(30);
 g.storeGrade(45);
 g.storeGrade(20);
console.log(g.grade());