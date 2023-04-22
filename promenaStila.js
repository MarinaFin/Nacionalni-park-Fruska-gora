function getShadow(color, id){
	if(color == "green"){
		document.getElementById(id).style.boxShadow = "0 0 30px lightgreen";
	} else if(color == "grey"){
		document.getElementById(id).style.boxShadow = "0 0 30px grey";
	}
}