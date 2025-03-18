function exe11() {
  //vamos usar dom para recuperar dados hmtl
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let sub = (nro1 * nro2) / 2;

  alert("o resultado é :" + sub);
  document.getElementById("area").innerText = " A ARÉA DO LOSANGO É:" + sub;
}
function exe12() {
  //vamos usar dom para recuperar dados hmtl
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let salario = nro2 / nro1;
  let sub = alert("o resultado é :" + salario + " Salarios");
  document.getElementById("salario").innerText =
    " ganha o total de :" + salario + " Salários mininos";
}
function exe13() {
  // Vamos usar DOM para recuperar dados HTML
  let nro1 = Number(document.getElementById("nro1").value);
  let tabuada = "";

  for (let i = 1; i <= 10; i++) {
    tabuada = +i + "x" + nro1 + " = " + nro1 * i + "<br>";
  }

  document.getElementById("Tabuada").innerText = tabuada;
}
function exe14() {
  //vamos usar dom para recuperar dados hmtl
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let sub = nro1 - nro2;
  let sub2 = sub * 12;
  let sub3 = sub * 365;
  let sub4 = sub2 * 4;

  alert("o resultado é :" + sub);
  document.getElementById("idade").innerText = " a idade em anos é: " + sub;
  document.getElementById("idade2").innerText = " a idade em meses é: " + sub2;
  document.getElementById("idade3").innerText = " a idade em dias é " + sub3;
  document.getElementById("idade4").innerText =
    " a idade em semanas é: " + sub4;
}
