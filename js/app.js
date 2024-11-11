

const BODY = document.body;
const TITLE_NAME = document.querySelectorAll("#title-name")

let PAGE_NAME = "amdrei@isopod";







// Page settings
function setPageSettings() {
	let head = document.head;

	var title = document.createElement("title");
	title.innerHTML = PAGE_NAME;

	head.append(title);
}



// Title Settings
function setTitleName() {
	let r,g,b;
	r = Math.floor(Math.random() * 255); 
	g = Math.floor(Math.random() * 255); 
	b = Math.floor(Math.random() * 255); 

	let color = `rgb(${r}, ${g}, ${b})`;  

  TITLE_NAME.forEach(function(element){
    element.style = `
      transition: 1s ease;
      text-shadow: 0 0 5px ${color}
`;
    element.style.color = color;
  });
}

setInterval(setTitleName, 500);



// Song
document.getElementById("song-button").onclick = () => {

}	



// Update every frame
function update() {
}

setInterval(update, 15);



// Set functions only once
function once() {
	setTitleName();
	setPageSettings();
}

once();









