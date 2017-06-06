var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

let sortedScores = scores.sort(function(first, second) {
	return first - second;
});

let smallFirst = sortedScores.reverse();

console.log("sorted scores", sortedScores);



var Fgroup = [];
var Dgroup = [];
var Cgroup = [];
var Bgroup = [];
var Agroup = [];


// How many of each grade? (A-F)  slice? pop? push?  DONT use pop, it removes from original list... slice?
for (i=0; i<scores.length; i++)
  if (sortedScores[scores.length-i] <= 60)  {
  	Fgroup += sortedScores.pop();
    } else if (sortedScores[i] <=70) {
  	Dgroup += sortedScores.pop();
  } else if (sortedScores[i] <=80) {
  	Cgroup += sortedScores.pop();
  }

console.log("Fgroup", Fgroup);

console.log("Dgroup", Dgroup);



// What is the lowest grade?

lowestGrade = sortedScores.pop();

console.log("The lowest grade is", lowestGrade);


// What is the highest grade?