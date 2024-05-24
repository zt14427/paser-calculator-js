let questions = [["Is the road new?", ["No", "Yes", "Like-new"]]];
let question_number = 0;

function start() {
	console.log('started');
	document.getElementById("options").style.visibility="visible";
	updatePrompt(questions[question_number][0], questions[question_number][1]);
	document.getElementById("submit_button").innerHTML="Next";
	document.getElementById("submit_button").onclick = "next";
	question_number++;
}

function next() {
	debug.log("next");
	question_number++;	
}

function updatePrompt(text, values){
	document.getElementById("prompt").innerHTML = text; 
	document.getElementById("options").innerHTML = "";
	let options = "";
	for (let i = 0; i < values.length; i++) {
		options += "<option value=\"" + values[i] + "\">" + values[i] +"</option>";
	}
	document.getElementById("options").innerHTML = options;
}