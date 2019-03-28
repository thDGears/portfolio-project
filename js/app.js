const open_menu = document.getElementById("open_menu");
const menu = document.getElementById("menu");
const close_menu = document.getElementById("close_menu");
const go_to_about = document.getElementById("go_to_about");
const go_to_skills = document.getElementById("go_to_skills");
const go_to_portfolio = document.getElementById("go_to_portfolio");
const go_to_recent = document.getElementById("go_to_recent");
const go_to_contact = document.getElementById("go_to_contact");

// OPEN THE MENU
open_menu.addEventListener("click", function(e){
    menu.classList.add("open");
    e.stopPropagation();
});

// CLOSE THE MENU
close_menu.addEventListener("click", function(){
    menu.classList.remove("open");
});
go_to_about.addEventListener("click", function(){
    menu.classList.remove("open");
});
go_to_skills.addEventListener("click", function(){
    menu.classList.remove("open");
});
go_to_portfolio.addEventListener("click", function(){
    menu.classList.remove("open");
});
go_to_recent.addEventListener("click", function(){
    menu.classList.remove("open");
});
go_to_contact.addEventListener("click", function(){
    menu.classList.remove("open");
});


// SHOW/HIDE MORE ABOUT ME
function showHide(){
	const moreLessContent = document.getElementById("more-about");
	let toggleKeyword = document.getElementById("more-btn");
	
	if (moreLessContent.style.display === "flex") {
		moreLessContent.style.display = "none";
		toggleKeyword.innerHTML = "MORE ABOUT ME";
	} else {
		moreLessContent.style.display = "flex";
		toggleKeyword.innerHTML = "LESS";
	}
}
