while (true){
    num1 = prompt("First number");
    num2 = prompt("Second number");
    operation = prompt("What function to perform");
    switch (operation){
        case "+":
            var result = (+num1) + (+num2);
            alert("Resuld" + result.toString());
            break;
        case "-":
            var result = (+num1) - (+num2);
            alert("Resuld" + result.toString());
            break;
        case "*":
            var result = (+num1) * (+num2);
            alert("Resuld" + result.toString());
            break;
        case "/":
            var result = (+num1) / (+num2);
            alert("Resuld" + result.toString());
            break;
        default: alert("Wrong function");
    };
    secred_word = prompt("Do you want to continion?");
    if (secred_word == "That's all"){
        break
    };
};