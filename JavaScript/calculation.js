function calculate(operator) {
    var a,b;
    a = document.getElementById("first").value;
    b = document.getElementById("second").value;
    var cal = a+operator+b;
    alert(cal); 
    document.getElementById("answer").innerHTML = eval(cal);     
    //document.getElementById("answer").innerHTML = selectOperator(operator, a, b);
}

/* function selectOperator(operator, a, b) {
    switch(operator){
        case '+' : 
            return parseInt(a) + parseInt(b);
        case '-' :
            return a-b;
        case '*' :
            return a*b;
        case '/' :
            return a/b;
    }
}
 */    
    function reset() {
        document.getElementById("first").value = '';
        document.getElementById("second").value = '';
        document.getElementById("answer").value = '';
    }