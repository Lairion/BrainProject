var car_array = [];
for (var i=0;i<2;i++){
    var firmName = prompt('Input firm name');
    var modelName = prompt('Input model');
    var engineDisplacement = prompt('Input engine displacement');
    car_array[i] = {'FirmName':firmName,'ModelName':modelName,'EngineDisplacement':engineDisplacement};
};
var text = ""
for (var i=0;i<2;i++){
    if(car_array[i].EngineDisplacement > 2){
        text = text + '<h1>-------------------</h1><p>Firm: ' + car_array[i].FirmName+'</p><p>Model: '+car_array[i].ModelName+'</p><p>Engine Displacement: '+ car_array[i].EngineDisplacement +'</p>'
        console.log('----------------------------');
        console.log('Firm: ' + car_array[i].FirmName);
        console.log('Model: ' + car_array[i].ModelName);
        console.log('Engine Displacement: '+ car_array[i].EngineDisplacement);
    }
}
var input_res = document.getElementById("input_result")
input_res.innerHTML = text;