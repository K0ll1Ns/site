function FUNCTI(obj)
{
	if (obj.value=="don") {
		div_infoo = document.getElementById("div_infoo");
		div_infoo.style.display = "block";
		div_mess.style.display = "none";
		div_traff.style.display="none";
		div_seo.style.display="none";
		div_webb.style.display="none";
		div_ra.style.display="none";
	}
	else if (obj.value=="kie"){
		div_mess = document.getElementById("div_mess");
		div_mess.style.display = "block";
		div_infoo.style.display = "none";
		div_traff.style.display="none";
		div_webb.style.display="none";
		div_ra.style.display="none";
		div_seo.style.display="none";
	}
	else if (obj.value=="trf"){
		div_traff= document.getElementById("div_traff");
		div_traff.style.display="block";
		div_mess.style.display="none";
		div_infoo.style.display="none";
		div_seo.style.display="none";
		div_webb.style.display="none";
		div_ra.style.display="none";
	}
	else if (obj.value=="s"){
		div_seo= document.getElementById("div_seo");
		div_seo.style.display="block";
		div_mess.style.display = "none";
		div_infoo.style.display = "none";
		div_traff.style.display="none";
		div_webb.style.display="none";
		div_ra.style.display="none";
	}
	else if (obj.value=="wb"){
		div_webb=document.getElementById("div_webb");
		div_webb.style.display="block";
		div_infoo.style.display = "none";
		div_mess.style.display = "none";
		div_traff.style.display="none";
		div_seo.style.display="none";
		div_ra.style.display="none";
	}
	else if(obj.value=="r"){
		div_ra=document.getElementById("div_ra");
		div_ra.style.display="block";
		div_webb.style.display="none";
		div_infoo.style.display = "none";
		div_mess.style.display = "none";
		div_traff.style.display="none";
		div_seo.style.display="none";

	}
}