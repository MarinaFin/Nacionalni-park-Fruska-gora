var sendRequest = document.getElementById("sendRequest");
sendRequest.addEventListener("click", sendMemberRequest);

function sendMemberRequest(){

	var ime = document.member.name.value.trim();
	var prezime = document.member.lastname.value.trim();
	var email = document.member.email.value.trim();
	var datumRodjenja = document.member.birth.value.trim();
	var pol = document.member.gender.value.trim();
	switch(pol){
		case "male":
			pol = "m";
			break;
		case "female":
			pol = "ž";
			break;
	}
	var obavestenja = document.member.notification.value;
	var poruka = document.member.question.value;
	
	if(isEmpty(ime) || isEmpty(prezime) || isEmpty(email) || isEmpty(datumRodjenja) || isEmpty(pol))
	{

		alert("Niste uneli odgovarajuće podatke u obavezna polja, pokušajte ponovo.");
	}
	else
	{
		ime = getUppercaseFirstLetterWord(ime);
		prezime = getUppercaseFirstLetterWord(prezime);
		
		if(confirm("Zdravo " + ime + " " + prezime + " da li ste sigurni da želite da postanete naš član?")) {
			
		document.getElementById("member-inner-div").innerHTML = "<p>Upravo ste poslali zahtev za članstvo udruženju Fruškogorac. Kontaktiraćemo Vas putem email-a.<p><br>"+
		"<label id='label'>Vaši podaci<br></label>"+
		"<p>Ime: " + ime + "</p>"+
		"<p>Prezime: " + prezime + "</p>"+
		"<p>Email adresa: " + email + "</p>"+
		"<p>Datum rođenja: " + datumRodjenja + "</p>"+
		"<p>Pol: " + pol + "</p><br>"+
		"<input type='button' id='back-to-form' value='Vrati se na formu'>";
		
		var backToFom = document.getElementById("back-to-form");
		backToFom.addEventListener("click", writeMemberForm);
		backToFom.style.marginRight = "10px";
		
		document.getElementById("label").style.fontWeight = "bold";
		}
	}
}

function getUppercaseFirstLetterWord(param){
	param = param.charAt(0).toUpperCase() + param.slice(1);
	return param;
}

function writeMemberForm(){
	document.getElementById("member-inner-div").innerHTML = '<form name="member">'+
							'<label for="name">Ime:</label>'+
							'<input type="text" id="name" name="name">'+
							'<label for="prezime">Prezime:</label>'+
							'<input type="text" id="lastname" name="lastname">'+
							'<label for="email">Unesite vašu e-mail adresu:</label>'+
							'<input type="email" id="email">'+
							'<label for="birth">Unesite datum rođenja:</label>'+
							'<input type="date" id="birth" name="birth" min="1900-01-01" max="2030-01-01">'+
							'<p class="gender-title">Označite vaš pol:</p>'+
							'<input type="radio" id="female" name="gender" value="female" checked>'+
							'<label class="radio-label" for="female">Ženki</label>'+
							'<input type="radio" id="male" name="gender" value="male" checked>'+
							'<label class="radio-label" for="female">Muški</label>'+
							'<div class="checkbox-wrapper">'+
								'<input type="checkbox" id="notification" name="notification" checked>'+
								'<label class="checkbox-label" for="notification">Prihvatam da primam obaveštenja od udruženja</label>'+
							'</div>'+
							'<label for="question">Poruka:</label>'+
							'<textarea id="question" name="question">'+
							'</textarea>'+
							'<input type="button" id="sendRequest" value="Pošalji zahtev za članstvo" >'+
							'</form>';
						
	var sendRequest = document.getElementById("sendRequest");
	sendRequest.addEventListener("click", sendMemberRequest);

}

function isEmpty(param){
	switch(param){
		case "":
			return true;
			break;
		default:
			return false;
			break;
	}
}

document.getElementById("send-question").addEventListener('click', sendQuestion);

function sendQuestion(){
	var ime = document.contact.name.value.trim();
	var prezime = document.contact.lastname.value.trim();
	var tipPitanja = document.contact.commentType.value.trim();
	var pitanje = document.contact.question.value.trim();
	switch(tipPitanja){
		case 2:
			tipPitanja = "Pitanje";
			break;
		case 3:
			tipPitanja = "Molba";
			break;
		case 4:
			tipPitanja = "Sugestija";
			break;		
		case 5:
			tipPitanja = "Komentar";
			break;		
		default:
			tipPitanja = "Pitanje";
			break;
	}
	if(isEmpty(ime) || isEmpty(prezime) || isEmpty(pitanje))
	{

		alert("Niste uneli odgovarajuće podatke u obavezna polja, pokušajte ponovo.");
	}
	else
	{
		alert("Uspešno ste poslali pitanje, zahvaljujemo vam se na interesovanju. ");
	}
}

document.getElementById("see-questions").addEventListener("click", questionList);

function questionList(){
	
	var questionArray = ["Pitanje", "Pitanje", "Pitanje", "Pitanje", "Pitanje", "Pitanje", "Pitanje", "Pitanje", "Pitanje", "Pitanje"];
	
	var answerArray = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"];


	 listOfQuestion = "<table border='1' id='question-table'><tr><th>Br.</th><th>Pitanje</th><th>Odgovor</th></tr>";
	
	for (var i = 0; i < questionArray.length; i++)
	{
		listOfQuestion += "<tr><td>" + i + "</td><td>" + questionArray[i] + "</td><td>" + answerArray[i] + "</td><tr>";
	}
	listOfQuestion += "</table><br><button id='back-to-question-form'>Vrati se na formu za pitanja</button>";
	var contactInnerDiv = document.getElementById("contact-inner-div");
	contactInnerDiv.innerHTML = listOfQuestion;
	
	contactInnerDiv.style.margin = "35px";
	contactInnerDiv.innerHTML = listOfQuestion;
	
	var backToQuestionForm = document.getElementById("back-to-question-form");
	backToQuestionForm.style.border = "1px solid black";
	backToQuestionForm.style.borderRadius = "5px";
	
	backToQuestionForm.addEventListener("click", writeQuestionForm);
	
}

function writeQuestionForm(){
	document.getElementById("contact-inner-div").innerHTML = '<form name="contact">'+
							'<label for="name">Ime:</label>'+
							'<input type="text" id="name" name="name">'+
							'<label for="prezime">Prezime:</label>'+
							'<input type="text" id="lastname" name="lastname">'+
							'<label for="email">Unesite vašu e-mail adresu:</label>'+
							'<input type="email" id="email">'+
							'<label for="comment-type" >Izaberite vrstu komentara koji šaljete:</label>'+
							'<select id="comment-type" name="commentType">'+
							'<option value="1">Pitanje</option>'+
							'<option value="2">Molba</option>'+
							'<option value="3">Sugestija</option>'+
							'<option value="4">Komentar</option>'+
							'<option value="5">Upozorenje</option>'+
							'</select>'+
							'<label for="question">Unesite pitanje:</label>'+
							'<textarea id="question" name="question">'+
							'</textarea>'+
							'<input type="button" id="send-question" value="Pošaljite pitanje">'+
							'<input type="button" id="see-questions" value="Pogledajte listu najčešćih pitanja">'+
							'</form>';
						
	var sendQuestionButton = document.getElementById("send-question");			
	sendQuestionButton.addEventListener('click', sendQuestion);
	document.getElementById("see-questions").addEventListener("click", questionList);
	
	var contactInnerDiv = document.getElementById("contact-inner-div");
	contactInnerDiv.style.margin = "0";
	sendQuestionButton.style.marginRight = "5px";
}