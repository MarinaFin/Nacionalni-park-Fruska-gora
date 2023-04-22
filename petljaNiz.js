function writeParkPage(){
	var heading = ["Biljke", "Životinje", "Gljive", "Geografija i geologija", "Hidrologija i klima"];
	
	var description = ["Flora Flora Fruške gore je veoma raznolika i specifična. Na prostoru uže zone Nacionalnog parka raste oko 1000 vrsta biljaka, a njihov ukupan broj, zajedno sa biljkama na prostoru zaštitne zone, prelazi cifru od 1500 vrsta. Ovako velikom raznovrsnošću Fruška gora može da… ",
	"Životinjski svet Fruške gore veoma je bogat i raznovrstan. Fauna beskičmenjaka (Invertebrata) je relativno slabo proučena. Najviše istraživane grupe beskičmenjaka na Fruškoj gori su: Nematoda, Cl. Trematodes, Cl. Oligochaeta, Cl. Arachnida (Acarina), Cl. Crustacea (Copepoda… ",
	"Gljive, kao jedno od sedam carstava živih bića na planeti Zemlji, sačinjavaju tzv. fungiju, grupu razlagača, mineralizatora organske materije, izuzetno značajnu u procesima kruženja materije i energije u prirodi. Na Fruškoj gori gljive žive na svim tipovima staništa,…",
	"Fruška gora se nalazi između 45° 0’ i 45° 15’ severne geografske širine i između 16° 37’ i 18° 01’ istočne geografske dužine. Fruška gora nalazi se u južnom delu Panonske nizije između reke Dunav na severu i reke Save na jugu…",
	"Hidrološke karakteristike Fruške gore Hidrografska mreža Fruške gore veoma je gusta i relativno pravilno raspoređena. Površinske vode su predstavljene izvorima, vrelima, gustom rečnom mrežom, barama i veštačkim jezerima. Hidrografija ove planine rezultat je relativno velike…"];

	var imageClass = ["plant", "animal", "mushroom", "geo", "climate"];
	
	var aboutParkText = "";
	
	for(var i = 0; i < heading.length; i++)
	{
		aboutParkText += '<div class="nature-content">'+
							'<div class="img ' + imageClass[i] + '"></div>'+
							'<div>'+
								'<h3 >' + heading[i] + '</h3>'+
								'<p>' + description[i] + '</p>'+
								'<a class="readmore" href="#">Pročitaj više</a>'+
							'</div>'+
						'</div>';
	}
	var aboutPark = document.getElementById("about-park");
	aboutPark.innerHTML = aboutParkText;
}

writeParkPage();