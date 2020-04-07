///////////////
var automaticli_enter=true
var card_in_hand_1 = {
    masty:"chervi1",
    power:10
}
var card_in_hand_2 = {
    masty:"chervi1",
    power:11
}
var card_in_hand_3 = {
    masty:"chervi3",
    power:12
}
var card_in_hand_4 = {
    masty:"chervi4",
    power:13
}
var card_in_hand_5 = {
    masty:"chervi5",
    power:14
}
var player_money=10000;
var player_name="unknown_player"
//////////////
function auto_enter(){
    if(automaticli_enter==true){
        player_name="unknown";
        game.style.display="block"
        start.style.display="none"
        player_name_div.innerHTML=player_name
    }
    
}
function onload_function_1(){
    time_battle_interval()
    check_stavka_input()
    player_money_div_1.innerHTML=player_money
    player_name_div.innerHTML=player_name
}
//for test| lay_out_cards("tus","tus","tus","tus","1","chervi","chervi","chervi","chervi","chervi","10","11","12","13","14")
function lay_out_cards(card_in_hand_1_masty,card_in_hand_2_masty,card_in_hand_3_masty,card_in_hand_4_masty,card_in_hand_5_masty,card_in_hand_1_power,card_in_hand_2_power,card_in_hand_3_power,card_in_hand_4_power,card_in_hand_5_power,place){
    /*************************************/
    if(place!=""){
        plase=document.getElementById(place);
        if((((card_in_hand_1_masty==card_in_hand_2_masty)&&(card_in_hand_2_masty==card_in_hand_3_masty)&&(card_in_hand_3_masty==card_in_hand_4_masty)&&(card_in_hand_4_masty==card_in_hand_5_masty))&&((card_in_hand_1_power==10)&&(card_in_hand_2_power==11)&&(card_in_hand_3_power==12)&&(card_in_hand_4_power==13)&&(card_in_hand_5_power==14)))){
            plase.innerHTML="Флеш рояль"
        }else if((((card_in_hand_1_power==card_in_hand_2_power-1)&&(card_in_hand_2_power==card_in_hand_3_power-1)&&(card_in_hand_3_power==card_in_hand_4_power-1)&&(card_in_hand_4_power==card_in_hand_5_power-1))&&((card_in_hand_1_masty==card_in_hand_2_masty)&&(card_in_hand_2_masty==card_in_hand_3_masty)&&(card_in_hand_3_masty==card_in_hand_4_masty)&&(card_in_hand_4_masty==card_in_hand_5_masty)))){
            plase.innerHTML="Стрит флеш"
        }else if(((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power))^((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_5_power))^((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))^((card_in_hand_1_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))^((card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))){
            plase.innerHTML="Карэ"
        }else if((((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_3_power))&&(card_in_hand_4_power==card_in_hand_5_power))^(((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_4_power))&&(card_in_hand_3_power==card_in_hand_5_power))^(((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_5_power))&&(card_in_hand_3_power==card_in_hand_4_power))^(((card_in_hand_1_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power))&&(card_in_hand_2_power==card_in_hand_5_power))^(((card_in_hand_1_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_5_power))&&(card_in_hand_2_power==card_in_hand_4_power))^(((card_in_hand_1_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))&&(card_in_hand_2_power==card_in_hand_3_power))^(((card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))&&(card_in_hand_1_power==card_in_hand_2_power))^(((card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))&&(card_in_hand_1_power==card_in_hand_3_power))^(((card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_5_power))&&(card_in_hand_1_power==card_in_hand_4_power))^(((card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power))&&(card_in_hand_1_power==card_in_hand_5_power))){
            plase.innerHTML="Фулл хаус"
        }else if((card_in_hand_1_masty==card_in_hand_2_masty)&&(card_in_hand_2_masty==card_in_hand_3_masty)&&(card_in_hand_3_masty==card_in_hand_4_masty)&&(card_in_hand_4_masty==card_in_hand_5_masty)){
            plase.innerHTML="Флеш"
        }else if ((card_in_hand_1_power==card_in_hand_2_power-1)&&(card_in_hand_2_power==card_in_hand_3_power-1)&&(card_in_hand_3_power=card_in_hand_4_power-1)&&(card_in_hand_4_power==card_in_hand_5_power-1)) {
            plase.innerHTML="Стрит"
        }else if((card_in_hand_3_power==card_in_hand_4_power&&card_in_hand_4_power==card_in_hand_5_power)^(card_in_hand_2_power==card_in_hand_4_power&&card_in_hand_4_power==card_in_hand_5_power)^(card_in_hand_2_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_5_power)^(card_in_hand_2_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_4_power)^(card_in_hand_1_power==card_in_hand_4_power&&card_in_hand_4_power==card_in_hand_5_power)^(card_in_hand_1_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_5_power)^(card_in_hand_1_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_4_power)^(card_in_hand_1_power==card_in_hand_2_power&&card_in_hand_2_power==card_in_hand_5_power)^(card_in_hand_1_power==card_in_hand_2_power&&card_in_hand_2_power==card_in_hand_4_power)^(card_in_hand_1_power==card_in_hand_2_power&&card_in_hand_2_power==card_in_hand_3_power)){
            plase.innerHTML="Тройка"
        }else if(( card_in_hand_3_power==card_in_hand_4_power && card_in_hand_2_power==card_in_hand_5_power)^( card_in_hand_3_power==card_in_hand_5_power && card_in_hand_2_power==card_in_hand_4_power)^( card_in_hand_2_power==card_in_hand_3_power && card_in_hand_4_power==card_in_hand_5_power)^( card_in_hand_1_power==card_in_hand_5_power && (card_in_hand_2_power==card_in_hand_3_power^card_in_hand_2_power==card_in_hand_4_power^card_in_hand_3_power==card_in_hand_5_power))^( card_in_hand_1_power==card_in_hand_4_power && (card_in_hand_2_power==card_in_hand_3_power^card_in_hand_2_power==card_in_hand_5_power^card_in_hand_3_power==card_in_hand_5_power))^( card_in_hand_1_power==card_in_hand_3_power && (card_in_hand_2_power==card_in_hand_4_power^card_in_hand_3_power==card_in_hand_5_power^card_in_hand_4_power==card_in_hand_5_power))^( card_in_hand_1_power==card_in_hand_2_power && (card_in_hand_3_power==card_in_hand_4_power^card_in_hand_3_power==card_in_hand_5_power^card_in_hand_4_power==card_in_hand_5_power))){
            plase.innerHTML="2 пары"
        }else if(((((((((card_in_hand_1_power==card_in_hand_2_power^card_in_hand_1_power==card_in_hand_3_power)^card_in_hand_1_power==card_in_hand_4_power)^card_in_hand_1_power==card_in_hand_5_power)^card_in_hand_2_power==card_in_hand_3_power)^card_in_hand_2_power==card_in_hand_4_power)^card_in_hand_2_power==card_in_hand_5_power)^card_in_hand_3_power==card_in_hand_4_power)^card_in_hand_3_power==card_in_hand_5_power)^card_in_hand_4_power==card_in_hand_5_power){
            plase.innerHTML="Пара"
        }else {
            plase.innerHTML="Старшая карта"
        }
    }else{
        if((((card_in_hand_1_masty==card_in_hand_2_masty)&&(card_in_hand_2_masty==card_in_hand_3_masty)&&(card_in_hand_3_masty==card_in_hand_4_masty)&&(card_in_hand_4_masty==card_in_hand_5_masty))&&((card_in_hand_1_power==10)&&(card_in_hand_2_power==11)&&(card_in_hand_3_power==12)&&(card_in_hand_4_power==13)&&(card_in_hand_5_power==14)))){
            console.log("Флеш рояль")
        }else if((((card_in_hand_1_power<card_in_hand_2_power)&&(card_in_hand_2_power<card_in_hand_3_power)&&(card_in_hand_3_power<card_in_hand_4_power)&&(card_in_hand_4_power<card_in_hand_5_power))&&((card_in_hand_1_masty==card_in_hand_2_masty)&&(card_in_hand_2_masty==card_in_hand_3_masty)&&(card_in_hand_3_masty==card_in_hand_4_masty)&&(card_in_hand_4_masty==card_in_hand_5_masty)))){
            console.log("Стрит флеш")
        }else if(((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power))^((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_5_power))^((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))^((card_in_hand_1_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))^((card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))){
            console.log("Карэ")
        }else if((((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_3_power))&&(card_in_hand_4_power==card_in_hand_5_power))^(((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_4_power))&&(card_in_hand_3_power==card_in_hand_5_power))^(((card_in_hand_1_power==card_in_hand_2_power)&&(card_in_hand_2_power==card_in_hand_5_power))&&(card_in_hand_3_power==card_in_hand_4_power))^(((card_in_hand_1_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power))&&(card_in_hand_2_power==card_in_hand_5_power))^(((card_in_hand_1_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_5_power))&&(card_in_hand_2_power==card_in_hand_4_power))^(((card_in_hand_1_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))&&(card_in_hand_2_power==card_in_hand_3_power))^(((card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))&&(card_in_hand_1_power==card_in_hand_2_power))^(((card_in_hand_3_power==card_in_hand_4_power)&&(card_in_hand_4_power==card_in_hand_5_power))&&(card_in_hand_1_power==card_in_hand_3_power))^(((card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_5_power))&&(card_in_hand_1_power==card_in_hand_4_power))^(((card_in_hand_2_power==card_in_hand_3_power)&&(card_in_hand_3_power==card_in_hand_4_power))&&(card_in_hand_1_power==card_in_hand_5_power))){
            console.log("Фулл хаус")
        }else if((card_in_hand_1_masty==card_in_hand_2_masty)&&(card_in_hand_2_masty==card_in_hand_3_masty)&&(card_in_hand_3_masty==card_in_hand_4_masty)&&(card_in_hand_4_masty==card_in_hand_5_masty)){
            console.log("Флеш")
        }else if ((card_in_hand_1_power<card_in_hand_2_power)&&(card_in_hand_2_power<card_in_hand_3_power)&&(card_in_hand_3_power<card_in_hand_4_power)&&(card_in_hand_4_power<card_in_hand_5_power)) {
            console.log("Стрит");
        }else if((card_in_hand_3_power==card_in_hand_4_power&&card_in_hand_4_power==card_in_hand_5_power)^(card_in_hand_2_power==card_in_hand_4_power&&card_in_hand_4_power==card_in_hand_5_power)^(card_in_hand_2_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_5_power)^(card_in_hand_2_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_4_power)^(card_in_hand_1_power==card_in_hand_4_power&&card_in_hand_4_power==card_in_hand_5_power)^(card_in_hand_1_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_5_power)^(card_in_hand_1_power==card_in_hand_3_power&&card_in_hand_3_power==card_in_hand_4_power)^(card_in_hand_1_power==card_in_hand_2_power&&card_in_hand_2_power==card_in_hand_5_power)^(card_in_hand_1_power==card_in_hand_2_power&&card_in_hand_2_power==card_in_hand_4_power)^(card_in_hand_1_power==card_in_hand_2_power&&card_in_hand_2_power==card_in_hand_3_power)){
            console.log("Тройка");
        }else if(( card_in_hand_3_power==card_in_hand_4_power && card_in_hand_2_power==card_in_hand_5_power)^( card_in_hand_3_power==card_in_hand_5_power && card_in_hand_2_power==card_in_hand_4_power)^( card_in_hand_2_power==card_in_hand_3_power && card_in_hand_4_power==card_in_hand_5_power)^( card_in_hand_1_power==card_in_hand_5_power && (card_in_hand_2_power==card_in_hand_3_power^card_in_hand_2_power==card_in_hand_4_power^card_in_hand_3_power==card_in_hand_5_power))^( card_in_hand_1_power==card_in_hand_4_power && (card_in_hand_2_power==card_in_hand_3_power^card_in_hand_2_power==card_in_hand_5_power^card_in_hand_3_power==card_in_hand_5_power))^( card_in_hand_1_power==card_in_hand_3_power && (card_in_hand_2_power==card_in_hand_4_power^card_in_hand_3_power==card_in_hand_5_power^card_in_hand_4_power==card_in_hand_5_power))^( card_in_hand_1_power==card_in_hand_2_power && (card_in_hand_3_power==card_in_hand_4_power^card_in_hand_3_power==card_in_hand_5_power^card_in_hand_4_power==card_in_hand_5_power))){
            console.log("2 пары");
        }else if(((((((((card_in_hand_1_power==card_in_hand_2_power^card_in_hand_1_power==card_in_hand_3_power)^card_in_hand_1_power==card_in_hand_4_power)^card_in_hand_1_power==card_in_hand_5_power)^card_in_hand_2_power==card_in_hand_3_power)^card_in_hand_2_power==card_in_hand_4_power)^card_in_hand_2_power==card_in_hand_5_power)^card_in_hand_3_power==card_in_hand_4_power)^card_in_hand_3_power==card_in_hand_5_power)^card_in_hand_4_power==card_in_hand_5_power){
            console.log("Пара");
        }else {
            console.log("Старшая карта");
        }
    }
}
function time_battle_interval(){
    var d=new Date();
        var min_battle= d.getMinutes();
        var sec_battle= d.getSeconds();
        battle_time_div.innerHTML=min_battle+":"+sec_battle;
    time_battle=setInterval(frfr,1000)
    function frfr(){
        var d=new Date();
        var min_battle= d.getMinutes();
        var sec_battle= d.getSeconds();

        battle_time_div.innerHTML=min_battle+":"+sec_battle;
    }
}
function check_stavka_input(){
    check_stavka_input_interval=setInterval(stavka_interval,1)
    function stavka_interval(){
        if(stavka_input.value>player_money){button_stavka_input_div.style.display="none";button_stavka_input_div_inc.style.display="block";}
        else{button_stavka_input_div.style.display="block";button_stavka_input_div_inc.style.display="none";}
        
    }
}
function write_leters(word,place_k){
    place=document.getElementById(place_k)
    for (var index = 0; index < word.length; index++) {
        place.innerHTML+=word[index]
        r=setInterval(erere,1000)
    }
    function erere(){
        r=clearInterval()
    }
}
