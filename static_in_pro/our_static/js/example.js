function valid_form(){
    value = AgeArr.value;
    valid = true;
    if (value == ""){
        alert("Sorry, you not input age.");
        valid = false;
    }
    else if ((+valid < 16) || (+valid > 79)) {
        alert("Sorry, you can't create an account.");
        valid = false;
    }
    return valid;
}