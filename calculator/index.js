let inputfirstvalue
let inputvalue = document.getElementById('inputEl')
let arithmaticoperator = ""
let inputsecondvalue = ""
let result
 

function buttonclick(value) {
   inputvalue.innerHTML += value 
}


function evaluatebtn(logical){
    arithmaticoperator = logical
    inputfirstvalue = inputvalue.innerHTML
    document.getElementById('calc_input_div').innerHTML = inputfirstvalue
    inputvalue.innerHTML = ''
    console.log(inputfirstvalue)
}

function clearinput() {
    console.log('inupt value')
    document.getElementById('calc_input_div').innerHTML = ""
    inputvalue.innerHTML = ""
    inputfirstvalue = ""
}

function equalTo(){
   if(inputfirstvalue == ""){

   }
   else if(arithmaticoperator === '*'){
    result = parseFloat(inputfirstvalue) * parseFloat(inputvalue.innerHTML)
        result.toFixed(2)
        inputvalue.innerHTML = result
   }else if(arithmaticoperator === '-'){
    result = parseFloat(inputfirstvalue) - parseFloat(inputvalue.innerHTML)
        result.toFixed(2)
        inputvalue.innerHTML = result
   }else if(arithmaticoperator === '/'){
    result = parseFloat(inputfirstvalue) / parseFloat(inputvalue.innerHTML)
        result.toFixed(2)
        inputvalue.innerHTML = result
   }else if(arithmaticoperator === "+"){
    result = parseFloat(inputfirstvalue) + parseFloat(inputvalue.innerHTML)
        result.toFixed(2)
        inputvalue.innerHTML = result
   }
   else if(inputvalue.innerHTML !== "" || arithmaticoperator === ""){
     
        inputvalue.innerHTML= inputvalue.innerHTML;
   }
}
