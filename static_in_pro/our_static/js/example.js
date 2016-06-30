function valid_form(){
    value_age = AgeArr.value;
    value_sname = SecndNameArr.value;
    value_name = NameArr.value;
    valid = true;
    console.log(value_age)
    if ((value_age == "") && (value_name == "") && (value_sname == "")){
        alert("Sorry, you not input data in area.");
        valid = false;
    }
    else { 
        if ((+value_age < 16) || (+value_age > 79)) {
        alert("Sorry, you can't create an account.");
        valid = false;    
        }
    }
    if ( ( document.contact_form.gender[0].checked == false ) && ( document.contact_form.gender[1].checked == false ) )
        {
                alert ( "Sorry, but you not choose your gender." );
                valid = false;
        }
    value_age = +value_age*12;
    AgeArr.value = value_age.toString();
    return valid; 
}

