var n = false;
while (n == false){
    var name_person = prompt("Input your name.");
    var second_name = prompt("Input your second name.");
    if (name && second_name)
        n = true;
    else{
        alert("You input empty area!")
        };
    };
NameArr.setAttribute('value', name_person );
SecndNameArr.setAttribute('value',second_name);