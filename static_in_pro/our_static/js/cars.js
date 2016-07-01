var car_array = [];
for (var i=0;i<5;i++){
    var firmName = prompt('Input firm name');
    var modelName = prompt('Input model');
    var engineDisplacement = prompt('Input engine displacement');
    car_array[i] = {'FirmName':firmName,'ModelName':modelName,'EngineDisplacement':engineDisplacement};
};
for (var i=0;i<5;i++){
    if(car_array[i].EngineDisplacement > 2){
        console.log('----------------------------');
        console.log('Firm: ' + car_array[i].FirmName);
        console.log('Model: ' + car_array[i].ModelName);
        console.log('Engine Displacement: '+ car_array[i].EngineDisplacement);
    }
}