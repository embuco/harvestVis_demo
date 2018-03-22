

svg1=document.getElementById('svg1');
svgAlaska=document.getElementById('svgAlaska');
svgAlabama=document.getElementById('svgAlabama');
svgArkansas=document.getElementById('svgArkansas');
svgArizona=document.getElementById('svgArizona');
svgCalifornia=document.getElementById('svgCalifornia');
svgColorado=document.getElementById('svgColorado');
svgHawaii=document.getElementById('svgHawaii');
svgConnecticut=document.getElementById('svgConnecticut');
svgDelaware=document.getElementById('svgDelaware');
svgFlorida=document.getElementById('svgFlorida');
svgGeorgia=document.getElementById('svgGeorgia');
svgIowa=document.getElementById('svgIowa');
svgIdaho=document.getElementById('svgIdaho');
svgIllinois=document.getElementById('svgIllinois');
svgIndiana=document.getElementById('svgIndiana');
svgKansas=document.getElementById('svgKansas');
svgKentucky=document.getElementById('svgKentucky');
svgLouisiana=document.getElementById('svgLouisiana');
svgMassachusetts=document.getElementById('svgMassachusetts');
svgMaryland=document.getElementById('svgMaryland');
svgMaine=document.getElementById('svgMaine');
svgMichigan=document.getElementById('svgMichigan');
svgMinnesota=document.getElementById('svgMinnesota');
svgMissouri=document.getElementById('svgMissouri');
svgMississipi=document.getElementById('svgMississipi');
svgMontana=document.getElementById('svgMontana');
svgNorthcarolina=document.getElementById('svgNorthcarolina');
svgNorthdakota=document.getElementById('svgNorthdakota');
svgNebraska=document.getElementById('svgNebraska');
svgNewhampshire=document.getElementById('svgNewhampshire');
svgNewjersey=document.getElementById('svgNewjersey');
svgNewmexico=document.getElementById('svgNewmexico');
svgNevada=document.getElementById('svgNevada');
svgNewyork=document.getElementById('svgNewyork');
svgOhio=document.getElementById('svgOhio');
svgOklahoma=document.getElementById('svgOklahoma');
svgOregon=document.getElementById('svgOregon');
svgPennsylvania=document.getElementById('svgPennsylvania');
svgRhodeisland=document.getElementById('svgRhodeisland');
svgsvgSouthcarolina=document.getElementById('svgSouthcarolina');
svgsvgSouthdakota=document.getElementById('svgSouthdakota');
svgTennessee=document.getElementById('svgTennessee');
svgTexas=document.getElementById('svgTexas');
svgUtah=document.getElementById('svgUtah');
svgVirginia=document.getElementById('svgVirginia');
svgVermont=document.getElementById('svgVermont');
svgWashington=document.getElementById('svgWashington');
svgWisconsin=document.getElementById('svgWisconsin');
svgWestvirginia=document.getElementById('svgWestvirginia');
svgWyoming=document.getElementById('svgWyoming');

//make for each state

svgAlaska.style.display = 'none';
svgAlabama.style.display = 'none';
svgArkansas.style.display = 'none';
svgArizona.style.display = 'none';
svgCalifornia.style.display = 'none';
svgColorado.style.display = 'none';
svgHawaii.style.display = 'none';
svgConnecticut.style.display = 'none';
svgDelaware.style.display = 'none';
svgFlorida.style.display = 'none';
svgGeorgia.style.display = 'none';
svgIowa.style.display = 'none';
svgIdaho.style.display = 'none';
svgIllinois.style.display = 'none';
svgIndiana.style.display = 'none';
svgKansas.style.display = 'none';
svgKentucky.style.display = 'none';
svgLouisiana.style.display = 'none';
svgMassachusetts.style.display = 'none';
svgMaryland.style.display = 'none';
svgMaine.style.display = 'none';
svgMichigan.style.display = 'none';
svgMinnesota.style.display = 'none';
svgMissouri.style.display = 'none';
svgMississippi.style.display = 'none';
svgMontana.style.display = 'none';
svgNorthcarolina.style.display = 'none';
svgNorthdakota.style.display = 'none';
svgNebraska.style.display = 'none';
svgNewhampshire.style.display = 'none';
svgNewjersey.style.display = 'none';
svgNewmexico.style.display = 'none';
svgNevada.style.display = 'none';
svgNewyork.style.display = 'none';
svgOhio.style.display = 'none';
svgOklahoma.style.display = 'none';
svgOregon.style.display = 'none';
svgPennsylvania.style.display = 'none';
svgRhodeisland.style.display = 'none';
svgSouthcarolina.style.display = 'none';
svgSouthdakota.style.display = 'none';
svgTennessee.style.display = 'none';
svgTexas.style.display = 'none';
svgUtah.style.display = 'none';
svgVirginia.style.display = 'none';
svgVermont.style.display = 'none';
svgWashington.style.display = 'none';
svgWisconsin.style.display = 'none';
svgWestvirginia.style.display = 'none';
svgWyoming.style.display = 'none';

settable=0;
var timeout;
document.getElementById('svg1').addEventListener('mouseover', function(ev){

	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  $('#info-box').html($(this).data('info'));
	  
	  var var1 = $(this).data('info').replace('<div>','');
	  var var2 = var1.replace('</div>','');
	  var myArray    = new Array();
		
		myArray[1] = "Louisiana";
		myArray[2] = "California";
		myArray[3] = "Texas";
		myArray[4] = "Arkansas";
		myArray[5] = "Minnesota";
		myArray[6] = "North Dakota";
		myArray[7] = "Illinois";
		myArray[8] = "Missouri";
		myArray[9] = "Wisconsin";
		myArray[10] = var2;

		var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked States within the Country</td>";
	  	
	  for (var i=1; i<11; i++) {
		if (i==10){
			
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted state rank within the nation</td></tr><tr><td style='height:15px;'>&nbsp;" +myArray[i]+ "</td></tr>";
		}
		else{
		myTable+="<tr><td style='height:15px;'> " + i + " - " +myArray[i]+ "</td>";
		}
	  }  
	   myTable+="</table>";

	 document.getElementById('mytable').innerHTML = myTable;
	 });
	 $("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

$("path, circle").click(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info2'));
});

$("path, circle").mousemove(function(e) {
if (typeof $(this).data('info2') != null){
	
  $('#info-box').css('top',e.pageY-$('#info-box').height()-100);
  $('#info-box').css('left',e.pageX-($('#info-box').width())-200);
	}
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}

//CALIFORNIA
document.getElementById('CA').addEventListener('click', function(ev){
	document.getElementById('svg1').style.display = 'none';
	svgCalifornia.style.display = 'block';
	svgCalifornia.setAttribute("viewBox", "50 75 50 150"); 
	svgCalifornia.setAttribute("height", "850"); 
	svgCalifornia.setAttribute("width", "1100"); 
	var myArray    = new Array();
		myArray[1] = "-";
		myArray[2] = "-";
		myArray[3] = "-";
		myArray[4] = "-";
		myArray[5] = "-";
		myArray[6] = "-";
		myArray[7] = "-";
		myArray[8] = "-";
		myArray[9] = "-";
	var myArray2    = new Array();
		myArray2[1] = "Merced";
		myArray2[2] = "Colusa";
		myArray2[3] = "Butte";
		myArray2[4] = "Glenn";
		myArray2[5] = "Sutter";
		myArray2[6] = "Imperial";
		myArray2[7] = "Solano";
		myArray2[8] = "Humboldt";
		myArray2[9] = "Siskiyou";
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  $('#info-box').html($(this).data('info2'));
	  var var1 = $(this).data('info').replace('<div>','');
	  var var2 = var1.replace('</div>','');
	  if (typeof $(this).data('info2') != 'undefined'){
	  var var3 = $(this).data('info2').replace('<div>','');
	  var var4 = var3.replace('</div>','');
	  }
		myArray[10] = "";
		myArray[11] = var2;
		myArray2[10] = var4;
		
		var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<11; i++) {
		if (i==10){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of 58)</td></tr><tr><td style='height:15px;'>&nbsp;" +myArray2[i]+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +myArray[11]+ "</td></tr>";
		}
		
		else{
		myTable+="<td style='height:15px;'> " + i + " - " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgCalifornia.addEventListener('click', function(ev){
		
		svgCalifornia.style.display = 'none';
		svg1.style.display = 'block';
		
		return;
		
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
	
})

//TEXAS
document.getElementById('TX').addEventListener('click', function(ev){
	
	document.getElementById('svg1').style.display = 'none';
	svgTexas.style.display = 'block';
	svgTexas.setAttribute("viewBox", "170 250 200 30"); 
	svgTexas.setAttribute("height", "800"); 
	svgTexas.setAttribute("width", "1200"); 
	 var myArray    = new Array();
		myArray[1] = "-";
		myArray[2] = "-";
		myArray[3] = "-";
		myArray[4] = "-";
		myArray[5] = "-";
		myArray[6] = "-";
		myArray[7] = "-";
		myArray[8] = "-";
		myArray[9] = "-";
	 var myArray2    = new Array();
		myArray2[1] = "Colorado";
		myArray2[2] = "Wharton";
		myArray2[3] = "Jefferson";
		myArray2[4] = "Matagorda";
		myArray2[5] = "Brazoria";
		myArray2[6] = "Calhoun";
		myArray2[7] = "Aransas";
		myArray2[8] = "Bell";
		myArray2[9] = "Chambers";
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  $('#info-box').html($(this).data('info2'));
	  var var1 = $(this).data('info').replace('<div>','');
	  var var2 = var1.replace('</div>','');
	  if (typeof $(this).data('info2') != 'undefined'){
	  var var3 = $(this).data('info2').replace('<div>','');
	  var var4 = var3.replace('</div>','');
	  }
		myArray[10] = "";
		myArray[11] = var2;
		myArray2[10] = var4;
		
				var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<11; i++) {
		if (i==10){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of 254)</td></tr><tr><td style='height:15px;'>&nbsp;" +myArray2[i]+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +myArray[11]+ "</td></tr>";
		}
		
		else{
		myTable+="<td style='height:15px;'> " + i + " - " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	document.getElementById('svgTexas').addEventListener('click', function(ev){
		svgTexas.style.display = 'none';
		svg1.style.display = 'block';
	})
		$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
	
})

//NORTH DAKOTA
document.getElementById('ND').addEventListener('click', function(ev){
	document.getElementById('svg1').style.display = 'none';
	svgNorthdakota.style.display = 'block';
	svgNorthdakota.setAttribute("viewBox", "200 30 120 50"); 
	svgNorthdakota.setAttribute("height", "500"); 
	svgNorthdakota.setAttribute("width", "1200"); 
	var myArray    = new Array();
		myArray[1] = "-";
		myArray[2] = "-";
		myArray[3] = "-";
		myArray[4] = "-";
		myArray[5] = "-";
		myArray[6] = "-";
		myArray[7] = "-";
		myArray[8] = "-";
		myArray[9] = "-";
	var myArray2    = new Array();
		myArray2[1] = "Stutsman";
		myArray2[2] = "Mclean";
		myArray2[3] = "Ramsey";
		myArray2[4] = "Kidder";
		myArray2[5] = "Logan";
		myArray2[6] = "Sheridan";
		myArray2[7] = "Benson";
		myArray2[8] = "Nelson";
		myArray2[9] = "McIntosh";
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  $('#info-box').html($(this).data('info2'));
	  var var1 = $(this).data('info').replace('<div>','');
	  var var2 = var1.replace('</div>','');
	  if (typeof $(this).data('info2') != 'undefined'){
	  var var3 = $(this).data('info2').replace('<div>','');
	  var var4 = var3.replace('</div>','');
	  }
		myArray[10] = "";
		myArray[11] = var2;
		myArray2[10] = var4;
		
				var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<11; i++) {
		if (i==10){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of 53)</td></tr><tr><td style='height:15px;'>&nbsp;" +myArray2[i]+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +myArray[11]+ "</td></tr>";
		}
		
		else{
		myTable+="<td style='height:15px;'> " + i + " - " +myArray2[i]+ "</td></tr>";
		}
	  }
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgNorthdakota.addEventListener('click', function(ev){
		svgNorthdakota.style.display = 'none';
		svg1.style.display = 'block';
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

//LOUISIANA
document.getElementById('LA').addEventListener('click', function(ev){
	document.getElementById('svg1').style.display = 'none';
	svgLouisiana.style.display = 'block';
	svgLouisiana.setAttribute("viewBox", "330 235 50 60"); 
	svgLouisiana.setAttribute("height", "500"); 
	svgLouisiana.setAttribute("width", "1200"); 
	var myArray    = new Array();
		myArray[1] = "-";
		myArray[2] = "-";
		myArray[3] = "-";
		myArray[4] = "-";
		myArray[5] = "-";
		myArray[6] = "-";
		myArray[7] = "-";
		myArray[8] = "-";
		myArray[9] = "-";
	var myArray2    = new Array();
		myArray2[1] = "Vermillion";
		myArray2[2] = "Cameron";
		myArray2[3] = "Terrebon";
		myArray2[4] = "Plaquemines";
		myArray2[5] = "St. Tammany";
		myArray2[6] = "St. Bernard";
		myArray2[7] = "Avoyelles";
		myArray2[8] = "St. Mary";
		myArray2[9] = "Jefferson Davis";
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  $('#info-box').html($(this).data('info2'));
	  var var1 = $(this).data('info').replace('<div>','');
	  var var2 = var1.replace('</div>','');
	  if (typeof $(this).data('info2') != 'undefined'){
	  var var3 = $(this).data('info2').replace('<div>','');
	  var var4 = var3.replace('</div>','');
	  }
		myArray[10] = "";
		myArray[11] = var2;
		myArray2[10] = var4;
		
				var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<11; i++) {
		if (i==10){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of 64)</td></tr><tr><td style='height:15px;'>&nbsp;" +myArray2[i]+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +myArray[11]+ "</td></tr>";
		}
		
		else{
		myTable+="<td style='height:15px;'> " + i + " - " +myArray2[i]+ "</td></tr>";
		}
	  }
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgLouisiana.addEventListener('click', function(ev){
		svgLouisiana.style.display = 'none';
		svg1.style.display = 'block';
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

function getBBox(elem){
    var svg1 = document.getElementById('svg1'), e = elem.cloneNode(true);
    e.style.display = "inline";
    svg1.appendChild(e);
    var b = e.getBBox();
    svg1.removeChild(e);
    return b;
}

window.onload = function () {
 var myArray = new Array();
    	myArray[1] = "Louisiana";
		myArray[2] = "California";
		myArray[3] = "Texas";
		myArray[4] = "Arkansas";
		myArray[5] = "Minnesota";
		myArray[6] = "North Dakota";
		myArray[7] = "Illinois";//tries to translate to finnish
		myArray[8] = "Missouri";
		myArray[9] = "Wisconsin";
    		myArray[10] = "-";
	  	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked States within the Country</td></tr>";
	  for (var i=1; i<11; i++) {
		if (i==10){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted state rank within the country</td></tr><tr><td style='height:15px;'>&nbsp;" +myArray[i]+ "</td></tr>";
		}
		else{
		myTable+="<tr><td style='height:15px;'>" + i + " - " +myArray[i]+ "</td>";
		}
	  }  
	   myTable+="</table>";

	 document.getElementById('mytable').innerHTML = myTable;
}
