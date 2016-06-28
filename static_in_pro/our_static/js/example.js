function valid_form(){
    value_age = AgeArr.value;
    value_sname = SecndNameArr.value;
    value_name = NameArr.value;
    valid = true;
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
                alert ( "Пожалуйста, выберите Ваш пол: Мужской или Женский" );
                valid = false;
        }
    return valid; 
}