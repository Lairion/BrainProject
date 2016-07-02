$(document).ready(function(){
   $('#input_result1').css("background-color","red");
    $('#input_result2').css("background-color","green");
    $('#input_result3').css("background-color","blue");
    $('#btn1').click(function(){
        askUser();
    })
    function askUser(){
        var input_user = prompt("Input number");
        div_num = check_value(input_user);
        input_user = prompt("Input color")
        $('#input_result'+div_num).css('background-color',input_user)
        
    }
    function check_value(num){
        if (num>0 && num<4){
            return num
        }
        else{
            return check_value(prompt("Input another number"))
        }
    }
});