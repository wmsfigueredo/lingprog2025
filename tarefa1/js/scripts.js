function seguir() {
  alert(`Você agora está seguindo Wellington`);
}
// exercício 1
function exe1() {
  // vamos usar DOM para recuperar os dados do HTML
  // DOM - Document Object Model
  // converte texto para número - Number()
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  // vamos fazer a subtração
  let sub = nro1 - nro2;
  // vamos mostrar o resultado ao usuário
  //alert("A subtração é " + sub)
  document.getElementById("sub").innerText = "O resultado é " + sub;
}

function exe2() {
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let nro3 = Number(document.getElementById("nro3").value);
  let multiplicacao = nro1 * nro2 * nro3;
  document.getElementById("multiplicacao").innerText =
    "O resultado é " + multiplicacao;
}

function exe3() {
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let divisao = nro1 / nro2;
  document.getElementById("divisao").innerText = "O resulta é " + divisao;
}

function exe4() {
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  // média ponderada
  let mp = (nro1 * 2 + nro2 * 3) / 5;
  document.getElementById("mp").innerText = "O resultado é " + mp;
}
function exe5() {
  let preco = Number(document.getElementById("preco").value);
  let desconto = (preco * 10) / 100;
  let preconovo = preco - desconto;
  document.getElementById("desconto").innerText =
    "O novo preço é de " + preconovo;
}
function exe6() {
  let preco = Number(document.getElementById("preco").value);
  let vendas = Number(document.getElementById("vendas").value);

  let comisao = (vendas * 4) / 100;

  let final = vendas + comisao;

  document.getElementById("mp").innerText =
    " comissão " + comisao + " salario final " + final;
}

function exe7() {
  //vamos usar dom para recuperar dados hmtl
  let peso = Number(document.getElementById("peso").value);

  let porcentagem = peso / 100;
  let sub = peso + 15 * porcentagem;
  let sub2 = peso - 20 * porcentagem;
  alert(" Engorda 15% :" + sub + " Emagrece 20% " + sub2);
  document.getElementById("novo1").innerText = " Engorda 15% :" + sub;
  document.getElementById("novo2").innerText = " Emagrece 20% " + sub2;
}

function exe8() {
  let peso = Number(document.getElementById("peso").value);
  let pesoGr = peso * 1000;
  document.getElementById("novo1").innerText = "O Peso em Gramas é " + pesoGr;
}

function exe9() {
  //vamos usar dom para recuperar dados hmtl
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let nro3 = Number(document.getElementById("nro3").value);
  let area = ((nro1 + nro2) * nro3) / 2;

  alert("o resultado é :" + area);
  document.getElementById("trap").innerText = " A ARÉA DO TRAPEZIO É:" + area;
}
function exe10() {
  //vamos usar dom para recuperar dados hmtl
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let sub = nro1 * nro2;

  alert("o resultado é :" + sub);
  document.getElementById("area").innerText = " A ARÉA DO LOSANGO É:" + sub;
}
