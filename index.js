   function calc(){
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var op = (document.querySelector("#operator").value);
    var Answer;

    if(op == "add"){ 
      Answer = a+b;
    }else if (op == "min"){
      Answer = a-b;
    }
    else if (op == "div"){
      Answer = a/b;
    }
    else if (op == "mul"){
      Answer = a*b;
    }

    document.querySelector("#result").innerHTML = Answer;
   }