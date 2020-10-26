function add() {
    var a,b;
    a = Number(document.getElementById("first").value);
    b = Number(document.getElementById("second").value);
    document.getElementById("answer").innerHTML = a+b;             
    }
    function sub() {
    var a,b;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    document.getElementById("answer").innerHTML=a-b;;
    }
    function mul() {
    var a,b;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    document.getElementById("answer").innerHTML=a*b;
    }
    function div() {
    var a,b;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    document.getElementById("answer").innerHTML=a/b;
    }
    function reset() {
        document.getElementById("first").value = '';
        document.getElementById("second").value = '';
        document.getElementById("answer").value = '';
    }