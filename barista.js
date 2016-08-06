var _musics_singers = ["Agir", "Anselmo", "C4", "Regula"];
var _agir_musics = ["Como ela e bela", "Parte-me o pescoco", "Makeup", "Bola de Cristal", "Leva-me a serio", "Nunca vou cair"];
var _anselmo_musics = ["Unica Mulher", "Um dois", "Nao me toca", "O teu crime e so 1", "Eva", "Curticao"];
var _c4_musics = ["Bo tem mel", "Estragar", "Muita areia", "Robocop", "Tu es a mulher", "Vamos ficar por aqui"];
var _regula_musics = ["Casanova" ,"Casca grossa", "Langaife", "Memo a veres", "Nivea", "WOMB"];
var _musics_time = ["3:43", "4:02", "4:24", "3:23", "3:58", "2:48"];
var _top_list_singers = ["C4", "Anselmo", "C4"];
var _top_list_musics = ["Estragar", "Um dois", "Muita areia"];
var _top_list_times = ["3:43", "4:02", "4:24"];
var _offeredDrinks = ["Coca-Cola", "B!"];
var _acceptedDrinks = [];
var _askedDrinks = [];
var _askedDrinksPrices = [];
var _askedDrinksQuantity = [];
var _mBoxList;
var _mBoxAdd;
var _mBoxTopTable;
var _mBoxSingers;
var _mBoxSingersTable;
var _mBoxMusics;
var _mBoxMusicsTable;
var _mBox
var _b_center;
var _mBoxInside;
var _back;
var _b_center_swipe;
var _b_menu_container;
var _mBoxInsertIntoList;
var _gameInside;
var _gameDardos;
var _gameSnooker;
var _gameQuiz;
var _help;
var _mBoxHelp;
var _quizQuestion1;
var _quizQuestion2;
var _quizQuestion3;
var _quizIndex;
var _confirmationBox;
var _fToExecute;
var _pedidoInside;
var _awardGame;
var _interacaoInside;
var _interacaoOffer;
var _interacaoMyOffers;
var _choosenChair = null;
var _trConta;
var _contaInside;
var _bMenuConta;

$(document).ready(function(){
	_mBoxList = $("#mBoxList")
	_mBoxAdd = $("#mBoxAdd");
	_mBoxTopTable = $("#mBoxList table");
	_mBoxSingers = $("#mBoxAdd #singers");
	_mBoxSingersTable = $("#mBoxAdd #singers table");
	_mBoxMusics = $("#mBoxAdd #musics");
	_mBoxMusicsTable = $("#mBoxAdd #musics table");
	_b_center = $("#b_center");
	_mBoxInside = $("#mBoxInside");
	_back = $("#back");
	_b_center_swipe = $("#b_center #swipe");
	_b_menu_container = $("#b_menu_container");
	_mBoxInsertIntoList = $("#insertMusics");
	_gameInside = $("#gameInside");
	_gameDardos = $("#gameDardos");
	_gameSnooker = $("#gameSnooker");
	_gameQuiz = $("#gameQuiz");
	_help = $("#help");
	_mBoxHelp = $("#mBoxHelp");
	_quizQuestion1 = $("#quizQ1");
	_quizQuestion2 = $("#quizQ2");
	_quizQuestion3 = $("#quizQ3");
	_quizIndex = $("#quizIndex");
	_confirmationBox = $("#confirmationBox");
	_pedidoInside = $("#pedidoInside");
	_awardGame = $("#awardGame");
	_interacaoInside = $("#interacaoInside");
	_interacaoOffer = $("#interacaoOffer");
	_interacaoMyOffers = $("#interacaoMyOffers");
	_trConta = $("#tr_conta");
	_contaInside = $("#conta_inside");
	_bMenuConta = $("#b_menu_conta");

	$("#table_center").click(function(){
		if ($('#on').css('opacity') == 1) $('#on').css('opacity', 0);
		setTimeout(function() { $("#welcome").css('opacity', 1); }, 2000);
		setTimeout(function() { $("#welcome").css('opacity', 0); }, 5000);

		$("#top").css('display', 'block');
		setTimeout(function() { $("#top").css('opacity', 1); }, 5000);

		$("#right").css('display', 'block');
		setTimeout(function() { $("#right").css('opacity', 1); }, 5000);
		
		$("#bottom").css('display', 'block');		
		setTimeout(function() { $("#bottom").css('opacity', 1); }, 5000);
		
		$("#left").css('display', 'block');
		setTimeout(function() { $("#left").css('opacity', 1); }, 5000);
		setTimeout(function() { $("#after_welcome").css('opacity', 1); }, 5000);
		setTimeout(function() { zoomdiv(); }, 9500);
		
	});

	//INITIALIZE DIVS
	//_mBoxAdd.append("<input type='button' id='m1' value='Anselmo - Unica Mulher' onclick='addMusic(this.value)'/></br>");
	//_mBoxAdd.append("<input type='button' id='m2' value='Bruno Mars - The Lazy Song' onclick='addMusic(this.value)'/></br>");
	//_mBoxAdd.append("<input type='button' id='m3' value='Pearl Jam - Better Man' onclick='addMusic(this.value)'/></br>");

	updateTopList();
	updateSingers();
	$(".musica_rodape div").html("<b>Em reproducao:<b>  "+_top_list_singers[0]+" - "+ _top_list_musics[0]);

	$("#b_menu_entry").click(function(){
		var entry_clicked = document.getElementById("b_menu_entry").innerHTML;
		var b_center = document.getElementById("b_center");
		var b_left = document.getElementById("b_left");

		_b_center.css('cursor', 'initial');

		if(entry_clicked == "MusicBox"){
			b_center.setAttribute('entry', "musicbox");
			$("#b_menu_container").css('display', 'none');
			$("#b_center #swipe").css('display', 'none');
			$("#back").css('display', 'block');
			$("#b_center #mBoxInside").css('display', 'block');
		} else if(entry_clicked == "Jogos"){
			b_center.setAttribute('entry', "jogos");
			$("#b_menu_container").css('display', 'none');
			$("#b_center #swipe").css('display', 'none');
			$("#back").css('display', 'block');
			$("#b_center #gameInside").css('display', 'block');
		} else if(entry_clicked == "Pedido"){
			b_center.setAttribute('entry', "pedido");
			$("#b_menu_container").css('display', 'none');
			$("#b_center #swipe").css('display', 'none');
			$("#back").css('display', 'block');
			$("#b_center #pedidoInside").css('display', 'block');
		} else if(entry_clicked == "Interacao Social"){
			b_center.setAttribute('entry', "interacao");
			$("#b_menu_container").css('display', 'none');
			$("#b_center #swipe").css('display', 'none');
			$("#back").css('display', 'block');
			$("#b_center #interacaoInside").css('display', 'block');
		}
	});

	$("#home").click(function(){
		_b_center.attr("entry", "");
		_mBoxList.css('display', 'none');
		_mBoxInside.css('display', 'none');
		_mBoxSingers.css('display', 'none');
		_mBoxAdd.css('display', 'none');
		_mBoxInsertIntoList.css('display', 'none');
		_mBoxMusics.css('display', 'none');
		_mBoxHelp.css('display', 'none');
		_back.css('display', 'none');
		_gameInside.css('display', 'none');
		_gameQuiz.css('display', 'none');
		_gameSnooker.css('display', 'none');
		_gameDardos.css('display', 'none');
		_quizQuestion1.css('display', 'none');
		_quizQuestion2.css('display', 'none');
		_quizQuestion3.css('display', 'none');
		_quizIndex.css('display', 'none');
		_pedidoInside.css('display','none');
		_interacaoInside.css('display', 'none');
		_interacaoOffer.css('display', 'none');
		_interacaoMyOffers.css('display', 'none');
		_bMenuConta.css('display', 'none');

		_b_menu_container.css('display', 'block');
		_b_center_swipe.css('display', 'block');
	});

	$("#help").click(function(){
		var entry = _b_center.attr("entry");
		
		if(entry == "musicbox" && _mBoxAdd.css('display')=="block" && _mBoxMusics.css('display')=="block"){
			_mBoxHelp.html("<div class='sectionTitle'><h2>MusicBox Ajuda</h2></div>Selecione uma ou mais das m&uacute;sicas do artista escolhido.Para ver mais m&uacute;sicas, arraste o dedo para cima e para baixo.");
			_mBoxAdd.css("display", "none");
			_mBoxHelp.css("display", "block");
		} else if(entry == "musicbox" && _mBoxAdd.css('display')=="block"){
			_mBoxHelp.html("<div class='sectionTitle'><h2>MusicBox Ajuda</h2>Selecione o artista para conseguir visualizar as m&uacute;sicas respetivas do mesmo</div>");
			_mBoxAdd.css("display", "none");
			_mBoxHelp.css("display", "block");

		} else if(_mBoxInside.css("display")=="block"){
			_mBoxHelp.html("<div class='sectionTitle'><h2>MusicBox Ajuda</h2></div>Adicionar musica - Permite escolher uma m&uacute;sica para tocar no bar</br>Ver lista- Permite visualizar as m&uacute;sicas que v&atilde;o tocar no bar");
			_mBoxInside.css("display", "none");
			_mBoxHelp.css("display", "block");
		}
	});
	
	$(_trConta).click(function(){
		$("#mapBoxOffered").css("display", "none");
		$("#mapBox").css("display", "none");
		$("#interacaoMyOffers").css("display", "none");
		$("#interacaoOffer").css("display", "none");
		$("#interacaoInside").css("display", "none");
		$("#pedidoInside").css("display", "none");
		$("#gameQuiz").css("display", "none");
		$("#gameSnooker").css("display", "none");
		$("#gameDardos").css("display", "none");
		$("#gameInside").css("display", "none");
		$("#mBoxHelp").css("display", "none");
		$("#mBoxList").css("display", "none");
		$("#mBoxAdd").css("display", "none");
		$("#mBoxInside").css("display", "none");
		$("#b_menu_container").css("display", "none");
		$("#b_menu_conta").css("display", "block");
		getAskedDrinks();
	});
	
	$("#conta_pagaMB table td").click(function(){
		var nr = event.target.id;
		var chars = $("#MBcode").val();
		
		if(chars.length <= 3){
			var append = chars + nr;
			$("#MBcode").val(append);
		}
	});
	
	totalConta();

});

function totalConta(){
	var total_conta=0;
	if(_askedDrinks.length>0){
		for (i=0; i<_askedDrinks.length; i++){
			var price = _askedDrinksPrices[i];
			total_conta += price;
		}
	}
	
	$("#tr_conta td").html("<label>Conta </label><label style='color:#2ECC71;'>" + total_conta + "&euro;</label>");
}

function getAskedDrinks(){
	_contaInside.html("");
	
	if(_askedDrinks.length>0){
		for (i=0; i<_askedDrinks.length; i++){
			var drink = _askedDrinks[i];
			var price = _askedDrinksPrices[i];
			var quantity = _askedDrinksQuantity[i];
			
			_contaInside.append(quantity + " x " + drink + "........." + price +  "&euro;</br>");
		}
		
		$("#pagaDinheiro").css('display', 'block');
		$("#pagaMB").css('display','block');
		/*_bMenuConta.append("<input type='button' class='button' value='Pagar em dinheiro' onclick=\"showConfirmation(\'Deseja efetuar o pagamento?\', \'pagaDinheiro\')\"/>");
		_bMenuConta.append("<input type='button' class='button' value='Pagar com multibanco' onclick=\"showConfirmation(\'Deseja efetuar o pagamento?\', \'pagaMB\')\"/>");*/
	}else{
		_contaInside.html("Ainda n&atilde;o tem pedidos feitos");
	}
}

function pagaDinheiro(){
	$("#conta_msg").css("display", "block");
	$("#pagaDinheiro").css("display", "none");
	$("#pagaMB").css("display", "none");
}

function pagaMB(){
	$("#conta_pagaMB").css("display", "block");
}

function efetuaPagamento(){
	$("#pagaMB").css("display", "none");
	$("#conta_pagaMB").css("display", "none");
	$("#conta_msg").css("display", "block");
	$("#pagaDinheiro").css("display", "none");
	$("#pagaMB").css("display", "none");
}

function fechaConta(){
	_askedDrinks = [];
	_askedDrinksPrices = [];
	_askedDrinksQuantity = [];
	getAskedDrinks();
	totalConta();
	$("#conta_msg").css("display", "none");
}

function zoomdiv(){
	//alert("zoom");
	//$("#bottom").animate({'zoom' : 1}, 400);
	$("body").css("position", "absolute");
	$("body").css("top", "-420px");
	$("body").css("left", "-57px");
	$("body").animate({"zoom": 3.8}, 1000);
}

function mBoxAdd(){
	_mBoxInside.css('display', 'none');
	_mBoxAdd.css('display', 'block');
	mBoxAddSingers();
}

function mBoxList(){
	_mBoxInside.css('display', 'none');
	_mBoxList.css('display', 'block');
}

function mBoxAddSingers(){
	$("#singers table #linha_principal_2 #add_msg").remove();
	$("#singers table th label").remove();
	_mBoxSingers.css('display', 'block');
}

function toggleCheck(){
	var checkall = $("#checkall");

	if(checkall.prop('checked')){
		checkall.prop('checked', false);
	} else {
		checkall.prop('checked', true);
	}

	if(checkall.is(':checked')){
		$('input[type=checkbox]').each(function () {
		    $(this).prop('checked', true);
		});
	} else {
		$('input[type=checkbox]').each(function () {
		    $(this).prop('checked', false);
		});
	}
}

function mBoxAddMusics(isinger){
	$("#mBoxAdd #musics table tr").remove();
	_mBoxMusicsTable.html("<tr onclick='toggleCheck()'><td><input id='checkall' onclick='toggleCheck()' type='checkbox'></td><td><b>Selecionar todas</b></td></tr>");
	var _singer_musics;
	var singer;

	switch(isinger){
		case 0: 
			_singer_musics = _agir_musics; 
			singer = "Agir";
			break;
		case 1: 
			_singer_musics = _anselmo_musics; 
			singer = "Anselmo";
			break;
		case 2: 
			_singer_musics = _c4_musics; 
			singer = "C4";
			break;
		case 3: 
			_singer_musics = _regula_musics; 
			singer = "Regula";
			break;
	}

	for(i=0; i<_singer_musics.length; i++)
		_mBoxMusicsTable.append('<tr onclick="select($(this))"><td><input type="checkbox" singer="'+ singer +'" music="' + _singer_musics[i] + '" time="' + _musics_time[i] + '"></td><td>'+ _singer_musics[i] +'</td><td>'+ _musics_time[i] +'</td></tr>');
	_mBoxSingers.css('display', 'none');
	_mBoxMusics.css('display', 'block');
	_mBoxInsertIntoList.css('display', 'block');
}

function select(e){
	var checkbox = e.find('input:checkbox');
	if(checkbox.prop('checked')){
		checkbox.prop('checked', false);
	} else {
		checkbox.prop('checked', true);
	}
}

function getBack(){
	if(_mBoxList!= null && _mBoxList.css('display') == "block"){
		_mBoxList.css('display', 'none');
		_mBoxInside.css('display', 'block');
	} else if(_mBoxSingers != null && _mBoxSingers.css('display') == "block"){
		_mBoxSingers.css('display', 'none');
		_mBoxAdd.css('display', 'none');
		_mBoxHelp.css('display', 'none');
		_mBoxInside.css('display', 'block');
	} else if(_mBoxMusics != null && _mBoxMusics.css('display') == "block"){
		_mBoxInsertIntoList.css('display', 'none');
		_mBoxMusics.css('display', 'none');
		_mBoxSingers.css('display', 'block');
	} else if(_mBoxHelp != null && _mBoxHelp.css('display') == "block"){
		_mBoxHelp.css('display', 'none');
		_mBoxInside.css('display', 'block');
	} else if(_gameDardos != null && _gameDardos.css('display') == "block"){
		_gameDardos.css('display', 'none');
		_gameInside.css('display', 'block');
	} else if(_gameQuiz != null && _gameQuiz.css('display') == "block"){
		_gameQuiz.css('display', 'none');
		_gameInside.css('display', 'block');
	} else if(_gameSnooker != null && _gameSnooker.css('display') == "block"){
		_gameSnooker.css('display', 'none');
		_gameInside.css('display', 'block');
	} else if(_interacaoOffer!=null && _interacaoOffer.css('display')=="block"){
		_interacaoOffer.css('display', 'none');
		_interacaoInside.css('display', 'block');
	} else if(_interacaoMyOffers!=null && _interacaoMyOffers.css('display')=="block"){
		_interacaoMyOffers.css('display', 'none');
		_interacaoInside.css('display', 'block');
	} else if (_contaInside!=null && _contaInside.css('display')=="block"){
		_bMenuConta.css("display", "none");
		_b_menu_container.css('display','block');
		_b_center_swipe.css('display','block');
	} else if(_b_center.attr("entry")){
		_back.css('display', 'none');
		_mBoxInside.css('display', 'none');
		_gameInside.css('display', 'none');
		_pedidoInside.css('display','none');
		_interacaoInside.css('display', 'none');
		_b_menu_container.css('display', 'block');
		_b_center_swipe.css('display', 'block');
	}
}

function getCheckedMusics(){
	var singer, music, time;

	$('input[type=checkbox]').each(function () {
	    if($(this).is(':checked')){
	    	singer = $(this).attr('singer');
	    	music = $(this).attr('music');
	    	time = $(this).attr('time');

	    	if(singer!=undefined && music!=undefined && time!=undefined){
	    		addMusic(singer, music, time);
	    		//$("#singers table th label").remove();
				//$("#singers table th").append("<label style='font-size: 7px;'> - Musicas adicionadas a lista<label>");
				//getBack();
	    	}
	    }
	});
}

function showConfirmation(msg, f){
	var run;
	$("#confirmationBox label").html(msg);
	_confirmationBox.css('display', 'block');

	$("#confYes").click(function(){
		if(!run){
			switch(f){
				case "getCheckedMusics": getCheckedMusics(); getBack(); break;
				case "showPedidoMenu": showPedidoMenu(); break;
				case "askDrink": askDrink(); break;
				case "pagaDinheiro": pagaDinheiro(); break;
				case "pagaMB": pagaMB(); break;
			}
		}
		run = true;
		_confirmationBox.css('display', 'none');
	});

	$("#confNo").click(function(){
		_confirmationBox.css('display', 'none');
	});
}

function ConfirmationQuiz(msg, f){
	$("#confirmationBox label").html(msg);
	_confirmationBox.css('display', 'block');

	$("#confYes").click(function(){
		_confirmationBox.css('display', 'none');
		awardMessage();
	});

	$("#confNo").click(function(){
		_confirmationBox.css('display', 'none');
	});
}

function addMusic(singer, music, time){
	_top_list_singers.push(singer);
	_top_list_musics.push(music);
	_top_list_times.push(time);
	_mBoxTopTable.append("<tr><td>"+(_top_list_singers.length)+"</td><td>" + singer + "</td><td>" + music + "</td><td>" + time + "</td></tr>");
}

function updateSingers(){
	for(i=0; i<_musics_singers.length; i++)
		_mBoxSingersTable.append("<tr onclick='mBoxAddMusics("+ i +")'><td>" + _musics_singers[i] + "</td></tr>");
}

function updateTopList(){
	for (i=0; i<_top_list_singers.length; i++)
		_mBoxTopTable.append("<tr><td>"+(i+1)+"</td><td>" + _top_list_singers[i] + "</td><td>" + _top_list_musics[i] + "</td><td>" + _top_list_times[i] + "</td></tr>");
}

function getTime(){
	var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var f = h+":"+m;
    
    return f;
}

function interacaoOferecer(){
	_interacaoInside.css('display', 'none');
	_interacaoOffer.css('display', 'block');
}

function interacaoOfertas(){
	_interacaoInside.css('display', 'none');
	_interacaoMyOffers.css('display', 'block');
}

function showMap(){
	$("#mapBox").css('display', 'block');
}

function showMapOffered(){
	$("#mapBoxOffered").css('display', 'block');
}

function mapBoxClose(){
	$("#mapBox").css('display', 'none');
}

function mapBoxOfferedClose(){
	$("#mapBoxOffered").css('display', 'none');
}

function showPedidoMenu(){
	_interacaoOffer.css('display', 'none');
	b_center.setAttribute('entry', "pedido");
	$("#b_center #pedidoInside").css('display', 'block');
}

function gameDardos(){
	_b_center.attr("entry", "");
	_mBoxList.css('display', 'none');
	_mBoxInside.css('display', 'none');
	_mBoxSingers.css('display', 'none');
	_mBoxAdd.css('display', 'none');
	_mBoxInsertIntoList.css('display', 'none');
	_mBoxMusics.css('display', 'none');
	_mBoxHelp.css('display', 'none');
	_back.css('display', 'none');
	_gameInside.css('display', 'none');
	_gameQuiz.css('display', 'none');
	_gameSnooker.css('display', 'none');
	_gameDardos.css('display', 'none');
	_quizQuestion1.css('display', 'none');
	_quizQuestion2.css('display', 'none');
	_quizQuestion3.css('display', 'none');
	_quizIndex.css('display', 'none');
	_pedidoInside.css('display','none');
	_interacaoInside.css('display', 'none');
	_interacaoOffer.css('display', 'none');
	_interacaoMyOffers.css('display', 'none');
	_bMenuConta.css('display', 'none');
	_b_center_swipe.css('display','none');
	_b_menu_container.css('display','none');
	_back.css('display','block');
	_gameDardos.css('display', 'block');
}

function gameSnooker(){
	_b_center.attr("entry", "");
	_mBoxList.css('display', 'none');
	_mBoxInside.css('display', 'none');
	_mBoxSingers.css('display', 'none');
	_mBoxAdd.css('display', 'none');
	_mBoxInsertIntoList.css('display', 'none');
	_mBoxMusics.css('display', 'none');
	_mBoxHelp.css('display', 'none');
	_back.css('display', 'none');
	_gameInside.css('display', 'none');
	_gameQuiz.css('display', 'none');
	_gameSnooker.css('display', 'none');
	_gameDardos.css('display', 'none');
	_quizQuestion1.css('display', 'none');
	_quizQuestion2.css('display', 'none');
	_quizQuestion3.css('display', 'none');
	_quizIndex.css('display', 'none');
	_pedidoInside.css('display','none');
	_interacaoInside.css('display', 'none');
	_interacaoOffer.css('display', 'none');
	_interacaoMyOffers.css('display', 'none');
	_bMenuConta.css('display', 'none');
	_b_center_swipe.css('display','none');
	_b_menu_container.css('display','none');
	_back.css('display','block');
	_gameSnooker.css('display', 'block');
}

function gameQuiz(){
	_gameInside.css('display', 'none');
	_gameQuiz.css('display', 'block');
	_quizIndex.css('display','block');
	_quizQuestion1.css('display', 'none');
	_quizQuestion2.css('display', 'none');
	_quizQuestion3.css('display', 'none');
	_awardGame.css('display', 'none');
}

function question1(){
	_quizIndex.css('display', 'none');
	_quizQuestion1.css('display', 'block');
	_quizQuestion2.css('display', 'none');
	_quizQuestion3.css('display', 'none');
	_awardGame.css('display', 'none');
}

function question2(){
	_quizIndex.css('display', 'none');
	_quizQuestion1.css('display', 'none');
	_quizQuestion2.css('display', 'block');
	_quizQuestion3.css('display', 'none');
	_awardGame.css('display', 'none');
}

function question3(){
	_quizIndex.css('display', 'none');
	_quizQuestion1.css('display', 'none');
	_quizQuestion2.css('display', 'none');
	_quizQuestion3.css('display', 'block');
	_awardGame.css('display', 'none');
}

function awardMessage(){
	_quizIndex.css('display', 'none');
	_quizQuestion1.css('display', 'none');
	_quizQuestion2.css('display', 'none');
	_quizQuestion3.css('display', 'none');
	_awardGame.css('display', 'block');
}

function incrementa(quantidade){
	var preco = $("#price11").html();
	preco = parseFloat(preco);
	quantidade = parseInt(quantidade);

	var precoInicial = parseFloat(preco / quantidade);
	var novoPreco = parseFloat(preco + precoInicial);

	document.getElementById("textb").stepUp(1);
	document.getElementById('price11').innerHTML = novoPreco + "&euro;";
}

function decrementa(valor){
	valor = parseInt(valor);
	if (valor>1){
		valor -= 1;
		document.getElementById("textb").stepDown(1);
		document.getElementById('price11').innerHTML = valor + "&euro;";
	}
}

function incrementaMesa(valor){
	valor = parseInt(valor);
	
	if (valor<3){
		document.getElementById("tableVal").stepUp(1);
	}
}

function decrementaMesa(valor){
	valor = parseInt(valor);
	if (valor>1){
		document.getElementById("tableVal").stepDown(1);
	}
}

function incrementaCadeira(valor){
	valor = parseInt(valor);
	
	if (valor<4){
		document.getElementById("chairVal").stepUp(1);
	}
}

function decrementaCadeira(valor){
	valor = parseInt(valor);
	if (valor>1){
		document.getElementById("chairVal").stepDown(1);
	}
}

function chooseChair(table, chair){
	var id = "#t" + table + chair;

	if(_choosenChair==id){
		$(id).css("backgroundColor", "transparent");
		_choosenChair = null;
	} else {
		$(_choosenChair).css("backgroundColor", "transparent");
		$(id).css("backgroundColor", "rgba(16,243,31,0.5)");
		_choosenChair = id;
	}
}

function rejectOffer(id){
	_offeredDrinks[id] = null;
	switch(id){
		case '0': $("#drink0").html("<input type='button' class='button' value='Rejeitada' style='background:grey; width:40px; margin-bottom:5px; cursor:default;' />"); break;
		case '1': $("#drink1").html("<input type='button' class='button' value='Rejeitada' style='background:grey; width:40px; margin-bottom:5px; cursor:default;' />"); break;
	}
}

function acceptOffer(id){
	_acceptedDrinks[id] = _offeredDrinks[id];
	switch(id){
		case '0': $("#drink0").html("<input type='button' class='button' value='Aceite' style='background:rgb(0,200,255); width:40px; margin-bottom:5px; cursor:default;' />"); break;
		case '1': $("#drink1").html("<input type='button' class='button' value='Aceite' style='background:rgb(0,200,255); width:40px; margin-bottom:5px; cursor:default;' />"); break;
	}
}

function askDrink(){
	var productsList = $("#pedidoTypeList table");
	var selected = productsList.find(".selected");
	var drink = selected.find("td").html();
	var quantity = $("#detailProduto #priceProduto #quantidade form #textb").val();
	var price = parseFloat($("#detailProduto #priceProduto #preco #price11").html());

	var i = _askedDrinks.length;
	_askedDrinks[i] = drink;
	_askedDrinksQuantity[i] = quantity;
	_askedDrinksPrices[i] = price;
	totalConta();
}

function updateDrinkInfo(id){
	$("#cocacola").css("display", "none");
	$("#icedtea").css("display", "none");
	$("#b").css("display", "none");
	$("#compal").css("display", "none");
	$("#" + id).css("display", "block");

	var cocacolaPrice = 1.5;
	var icedteaPrice = 1.5;
	var bPrice = 2;
	var somersbiPrice = 3.5;
	var compalPrice = 1.5;
	var superbockPrice = 1.25;
	var upPrice = 1.5;

	switch(id){
		case "cocacola": $("#price11").html(cocacolaPrice + "&euro;"); $("#fotosProduto").attr("src", "images/cola.png"); break;
		case "icedtea": $("#price11").html(icedteaPrice + "&euro;"); $("#fotosProduto").attr("src", "images/icetea.png"); break;
		case "b": $("#price11").html(bPrice + "&euro;"); $("#fotosProduto").attr("src", "images/B.png"); break;
		case "somersbi": $("#price11").html(somersbiPrice + "&euro;"); $("#fotosProduto").attr("src", "images/somersby.png"); break;
		case "compal": $("#price11").html(compalPrice + "&euro;"); $("#fotosProduto").attr("src", "images/compal.png"); break;
		case "superbock": $("#price11").html(superbockPrice + "&euro;"); $("#fotosProduto").attr("src", "images/superbock.png"); break;
		case "7up": $("#price11").html(upPrice + "&euro;"); $("#fotosProduto").attr("src", "images/7up.png"); break;
	}

	$("#textb").val(1);
}

function deleteMBcode(){
	$("#MBcode").val("");
}



function highlight_row() {
    var table = document.getElementById('display-table');
    var cells = table.getElementsByTagName('td');

    for (var i = 0; i < cells.length; i++) {
        // Take each cell
        var cell = cells[i];
        // do something on onclick event for cell
        cell.onclick = function () {
            // Get the row id where the cell exists
            var rowId = this.parentNode.rowIndex;

            var rowsNotSelected = table.getElementsByTagName('tr');
            for (var row = 0; row < rowsNotSelected.length; row++) {
                rowsNotSelected[row].style.backgroundColor = "";
                rowsNotSelected[row].classList.remove('selected');
            }
            var rowSelected = table.getElementsByTagName('tr')[rowId];
            rowSelected.className += "selected";
        }
    }

} //end of function

window.onload = highlight_row;

$(function(){  
	var t_menu_entry=0,
	r_menu_entry=0,
	b_menu_entry=0,
	l_menu_entry=0;

	var menu_entries = ["Pedido", "Interacao Social", "MusicBox", "Jogos"];
	var b_menu = document.getElementById("b_menu_container");
	var b_entry = document.getElementById("b_menu_entry");
	var b_center = document.getElementById("b_center");
    //jquery.hammer.js
    // $(red).hammer().on("swipe", function(event) {
    //     if(event.gesture.direction === "right") {
    //         $(this).find(".color").animate({left: "+=100"}, 500);
    //     } else if(event.gesture.direction === "left") {
    //         $(this).find(".color").animate({left: "-=100"}, 500);
    //     }
    //     $("#event").text(event.gesture.direction);
    // });
    
    //hammer.js


    
    //Swipe
    Hammer(b_center).on("swipeleft", function() {
    	if(b_menu_entry==3)
	    	b_menu_entry=0;
	    else
    		b_menu_entry++;
        //$(this).find(".color").animate({left: "-=100"}, 500);
        b_entry.innerHTML = menu_entries[b_menu_entry];
    });
    
    Hammer(b_center).on("swiperight", function() {
    	if(b_menu_entry==0)
	    	b_menu_entry=3;
	    else
    		b_menu_entry--;
        //$(this).find(".color").animate({left: "+=100"}, 500);
        b_entry.innerHTML = menu_entries[b_menu_entry];
    });
    
    // Drag
    /*Hammer(blue).on("dragleft", function() {
        $(this).find(".color").animate({left: "-=100"}, 500);
        $("#event").text("drag left");
    });
    
    Hammer(blue).on("dragright", function() {
        $(this).find(".color").animate({left: "+=100"}, 500);
        $("#event").text("drag right");
    });*/
});