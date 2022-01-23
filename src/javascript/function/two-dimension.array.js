var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
function avg(grades){
  let avg = 0;
  let total = 0;
  for(let i=0; i < grades.length; i++) {
      for(let j=0; j < grades[i].length; j++) {
          total += grades[i][j];
      }
      avg = total/grades[i].length;
      console.log(`AVG STUDENT  id ${i+1}: ${avg.toFixed()}`);
  }
}

// avg(grades);




function Point(x,y) {
    this.x = x;
    this.y = y;
};

function displayPts(arr){
for(let i=0; i < arr.length; i++){
    console.log(`print x : ${arr[i].x} and ${arr[i].y}`);
}
};

let point1 = new Point(10,20);
let point2 = new Point(30,40);
let point3 = new Point(50,60);
let allPoints = [point1, point2,point3];
console.log(allPoints);
displayPts(allPoints);