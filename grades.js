var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

let sortedScores = scores.sort(function(first, second) {
	return first - second;
});


console.log("sorted scores small to big", sortedScores);

sortedScores = sortedScores.reverse();

console.log("sorted scores big to small", sortedScores);
var Fgroup = [];
var Dgroup = [];
var Cgroup = [];
var Bgroup = [];
var Agroup = [];


// What is the lowest grade?

lowestGrade = sortedScores.pop();

console.log("The lowest grade is", lowestGrade);

sortedScores.push(lowestGrade);

// console.log("sorted scores after lowest grade popped in and back out?", sortedScores);


// What is the highest grade?

highestGrade = sortedScores.shift();

console.log("The highest grade is", highestGrade);

sortedScores.unshift(highestGrade);

// console.log("sorted scores after highest grade popped in and back out?", sortedScores);


// How many of each grade? (A-F)  
for (i=0; i<scores.length; i++) {
	if (sortedScores[i] >= 91) {
		Agroup.unshift(sortedScores[i]) 		
	} else if (sortedScores[i] >= 81) {
		Bgroup.unshift(sortedScores[i]) 		
	} else if (sortedScores[i] >= 71) {
		Cgroup.unshift(sortedScores[i]) 		
	} else if (sortedScores[i] >= 61) {
		Dgroup.unshift(sortedScores[i]) 		
	} else if (sortedScores[i] >= 50) {
		Fgroup.unshift(sortedScores[i]) 		
	}

 }

console.log("How many As?", Agroup.length);

console.log("How many Bs?", Bgroup.length);
console.log("How many Cs?", Cgroup.length);
console.log("How many Ds?", Dgroup.length);
console.log("How many Fs?", Fgroup.length);