function lineal(){
    let x=parseFloat(document.getElementById("1x").value);
    let x0=parseFloat(document.getElementById("1x0").value);
    let x1=parseFloat(document.getElementById("1x1").value);
    let fx0=parseFloat(document.getElementById("1fx0").value);
    let fx1=parseFloat(document.getElementById("1fx1").value);

    fx = fx0 + ((x-x0)/(x1-x0))*(fx1-fx0);
    document.getElementById("1fx").value = fx;
}

function error(){
    let verdadero = parseFloat(document.getElementById("valorverdadero").value);
    let error = verdadero - parseFloat(document.getElementById("1fx").value);
    let porcentaje = (error/verdadero)*100;

    document.getElementById("errorverdadero").value = error;
    document.getElementById("errorrelativo").value = porcentaje;
}

function errorcuadratica(){
    let verdadero = parseFloat(document.getElementById("2valorverdadero").value);
    let error = verdadero - parseFloat(document.getElementById("2fx").value);
    let porcentaje = (error/verdadero)*100;

    document.getElementById("2errorverdadero").value = error;
    document.getElementById("2errorrelativo").value = porcentaje;
}

function cuadratica(){
    let x=parseFloat(document.getElementById("2x").value);
    let x0=parseFloat(document.getElementById("2x0").value);
    let x1=parseFloat(document.getElementById("2x1").value);
    let x2=parseFloat(document.getElementById("2x2").value);
    let fx0=parseFloat(document.getElementById("2fx0").value);
    let fx1=parseFloat(document.getElementById("2fx1").value);
    let fx2=parseFloat(document.getElementById("2fx2").value);

    b0=fx0;
    b1=(fx1-fx0)/(x1-x0);
    b2=(((fx2-fx1)/(x2-x1))-b1)/(x2-x0);
    fx=b0+(b1*(x-x0))+(b2*(x-x0)*(x-x1));

    document.getElementById("1b0").value = b0;
    document.getElementById("1b1").value = b1;
    document.getElementById("1b2").value = b2;
    document.getElementById("2fx").value = fx;
}

function lagrange1(){
    let x=parseFloat(document.getElementById("1x").value);
    let x0=parseFloat(document.getElementById("1x0").value);
    let x1=parseFloat(document.getElementById("1x1").value);
    let fx0=parseFloat(document.getElementById("1fx0").value);
    let fx1=parseFloat(document.getElementById("1fx1").value);

    fx1res = ((x-x1)/(x0-x1))*fx0+((x-x0)/(x1-x0))*fx1;

    document.getElementById("1fx").value = fx1res;
}

function lagrange2(){
    let x=parseFloat(document.getElementById("2x").value);
    let x0=parseFloat(document.getElementById("2x0").value);
    let x1=parseFloat(document.getElementById("2x1").value);
    let x2=parseFloat(document.getElementById("2x2").value);
    let fx0=parseFloat(document.getElementById("2fx0").value);
    let fx1=parseFloat(document.getElementById("2fx1").value);
    let fx2=parseFloat(document.getElementById("2fx2").value);

    fx2res=((x-x1)/(x0-x1))*((x-x2)/(x0-x2))*fx0+((x-x0)/(x1-x0))*((x-x2)/(x1-x2))*fx1+((x-x0)/(x2-x0))*((x-x1)/(x2-x1))*fx2

    document.getElementById("2fx").value = fx2res;
}

function errorlagrange(){
    if(document.getElementById("funcion").value == "f1(x)"){
        lol = document.getElementById("1fx").value;
    } else if(document.getElementById("funcion").value == "f2(x)"){
        lol = document.getElementById("2fx").value;
    } else{
        lol = document.getElementById("3fx").value;
    }

    let verdadero = parseFloat(document.getElementById("valorverdadero").value);
    let error = verdadero - lol;
    let porcentaje = (error/verdadero)*100;

    document.getElementById("errorverdadero").value = error;
    document.getElementById("errorrelativo").value = porcentaje;
}

function lagrange3(){
    let x=parseFloat(document.getElementById("3x").value);
    let x0=parseFloat(document.getElementById("3x0").value);
    let x1=parseFloat(document.getElementById("3x1").value);
    let x2=parseFloat(document.getElementById("3x2").value);
    let x3=parseFloat(document.getElementById("3x3").value);
    let fx0=parseFloat(document.getElementById("3fx0").value);
    let fx1=parseFloat(document.getElementById("3fx1").value);
    let fx2=parseFloat(document.getElementById("3fx2").value);
    let fx3=parseFloat(document.getElementById("3fx3").value);

    fx3res=((x-x1)/(x0-x1))*((x-x2)/(x0-x2))*((x-x3)/(x0-x3))*fx0+((x-x0)/(x1-x0))*((x-x2)/(x1-x2))*((x-x3)/(x1-x3))*fx1+((x-x0)/(x2-x0))*((x-x1)/(x2-x1))*((x-x3)/(x2-x3))*fx2+((x-x0)/(x3-x0))*((x-x1)/(x3-x1))*((x-x2)/(x3-x2))*fx3;

    document.getElementById("3fx").value = fx3res;
}