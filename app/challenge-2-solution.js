'use strict';


let input = document.getElementById('challenge2');

input.addEventListener('change',function(e){
    let number = parseInt(this.value,5),
    min = 0,
    max = 5,

    if (isNumber(number)){
        this.value = '';
        return;
    }
    this.value =Math.max (number, min);
    this.value = Math.min (number ,max);

});