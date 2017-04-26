var updateStatusText = [];

var textArea = document.getElementById('textArea');

function updateText(){
	updateStatusText.push({
		status: textArea.value,
		image: document.getElementsByClassName('active')[0].getAttribute('data-image')
	});
	textArea.value = "";
	console.log(updateStatusText);
	renderList(updateStatusText);
}

function imageSelector(elem){
	if(elem.getAttribute('class') == "active") {
		return false;
	} else {
		if(document.getElementsByClassName('active').length) {
			document.getElementsByClassName('active')[0].removeAttribute("class");
		}
		elem.setAttribute("class", "active");
	}
}

function renderList(list){
	var ul = document.getElementById('lists');

	var li = "";

	for(var index in list){
		li += "<li class='list-group-item'>";
			li += "<span>"+list[index]['status']+"</span>";
			li += "<span><img src='https://in.bmscdn.com/webin/static/amp/"+list[index]['image']+".png' /></span>";
		li += "</li>";
	}
	ul.innerHTML = li;
}

