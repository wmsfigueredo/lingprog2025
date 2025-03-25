function exe11() {
  // recupera os dados do usuário
  let nota1 = Number(document.getElementById("nota1").value);
  let nota2 = Number(document.getElementById("nota2").value);
  let nota3 = Number(document.getElementById("nota3").value);
  let nota4 = Number(document.getElementById("nota4").value);
  // calcular média
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  if (media >= 7) {
    document.getElementById("media").innerText = "Aprovado com média " + media;
  } else {
    document.getElementById("media").innerText = "Reprovado com média " + media;
  }
}
function exe12() {
  // recupera os dados do usuário
  let nota1 = Number(document.getElementById("nota1").value);
  let nota2 = Number(document.getElementById("nota2").value);
  // calcula média
  let media = (nota1 + nota2) / 2;
  if (media >= 0 && media < 3) {
    document.getElementById("media").innerHTML = "Reprovado " + media;
  } else if (media >= 3 && media < 7) {
    document.getElementById("media").innerHTML = "Exame " + media;
  } else if (media >= 7 && media <= 10) {
    document.getElementById("media").innerHTML = "Aprovado " + media;
  } else {
    document.getElementById("media").innerHTML = "Problema com notas";
  }
}

function exe13() {
  // recupera os dados do usuário
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  // calcula o menor e mostra o resultado
  if (nro1 < nro2) {
    document.getElementById("menor").innerText = "O menor é " + nro1;
  } else if (nro2 < nro1) {
    document.getElementById("menor").innerText = "O menor é " + nro2;
  } else {
    document.getElementById("menor").innerText = "Os dois são iguais";
  }
}

function exe14() {
  // recupera os dados do usuário
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let nro3 = Number(document.getElementById("nro3").value);
  // calcula o maior deles
  if (nro1 >= nro2 && nro1 >= nro3) {
    document.getElementById("maior").innerHTML = "O maior é " + nro1;
  } else if (nro2 >= nro1 && nro2 >= nro3) {
    document.getElementById("maior").innerHTML = "O maior é " + nro2;
  } else if (nro3 >= nro1 && nro3 >= nro2) {
    document.getElementById("maior").innerHTML = "O maior é " + nro3;
  }
}
function exe15() {
  // recupera os dados do usuário
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let selecao = Number(document.getElementById("selecao").value);
  // utilização do escolha
  switch (selecao) {
    case 1:
      document.getElementById("result").innerText = (nro1 + nro2) / 2;
      break;
    case 2:
      if (nro1 >= nro2) {
        document.getElementById("result").innerText = nro1 - nro2;
      } else {
        document.getElementById("result").innerText = nro2 - nro1;
      }
      break;
    case 3:
      document.getElementById("result").innerText = nro1 * nro2;
      break;
    case 4:
      if (nro2 != 0) {
        document.getElementById("result").innerText = nro1 / nro2;
      } else {
        document.getElementById("result").innerText = "Divisão por zero";
      }
  }
}
function exe16() {
  // recupera os dados do usuário
  let nro1 = Number(document.getElementById("nro1").value);
  let nro2 = Number(document.getElementById("nro2").value);
  let selecao = Number(document.getElementById("selecao").value);
  switch (selecao) {
    case 1:
      document.getElementById("result").innerText =
        "A potência é " + Math.pow(nro1, nro2);
      break;
    case 2:
      document.getElementById("result").innerHTML =
        "RQ do nro1 " +
        Math.sqrt(nro1).toFixed(2) +
        " <br/> RQ do nro2 " +
        Math.sqrt(nro2).toFixed(2);
      break;
    case 3:
      document.getElementById("result").innerHTML =
        "RC do nro1 " +
        Math.cbrt(nro1).toFixed(2) +
        " <br/> RC do nro2 " +
        Math.cbrt(nro2).toFixed(2);
      break;
  }
}
function exe17() {
  // recupera os dados do usuário
  let salario = Number(document.getElementById("salario").value);
  // verifica valor do salário
  if (salario < 0) {
    document.getElementById("novo").innerHTML = "Salário negativo";
  } else if (salario < 500) {
    document.getElementById("novo").innerHTML =
      "Novo salário " + (salario + (salario * 30) / 100);
  } else {
    document.getElementById("novo").innerHTML =
      "Salário maior ou igual a 500, sem reajuste";
  }
}
function exe18() {
  // recupera os dados do usuário
  let salario = Number(document.getElementById("salario").value);
  if (salario < 0) {
    document.getElementById("novo").innerHTML = "Salário negativo";
  } else if (salario <= 300) {
    // vamos usar template string
    let novoSalario = salario + (salario * 35) / 100;
    document.getElementById("novo").innerHTML = `Novo salário ${novoSalario}`;
  } else {
    // vamos usar template string
    novoSalario = salario + (salario * 15) / 100;
    document.getElementById("novo").innerHTML = `Novo salário ${novoSalario}`;
  }
}
function exe19() {
  // recupera o valor do saldo
  let saldo = Number(document.getElementById("saldo").value);
  // calcula o crédito
  let credito = 0; // inicializa com zero
  if (saldo > 400) {
    credito = (saldo * 30) / 100;
  } else if (saldo > 300 && saldo <= 400) {
    credito = (saldo * 25) / 100;
  } else if (saldo > 200 && saldo <= 300) {
    credito = (saldo * 20) / 100;
  } else if (saldo >= 0 && saldo <= 200) {
    credito = (saldo * 10) / 100;
  } else {
    // saldo negativo
    document.getElementById("credito").innerHTML =
      "Saldo não pode ser negativo";
    return; // saiu da função
  }
  document.getElementById(
    "credito"
  ).innerHTML = `Saldo ${saldo} e crédito ${credito}`;
}
function exe20() {
  // recupera o custo da fábrica
  let custo = Number(document.getElementById("custo").value);
  let distribuidor = 0;
  let imposto = 0;
  if (custo >= 0 && custo < 12000) {
    distribuidor = (custo * 5) / 100;
    imposto = 0;
  } else if (custo >= 12000 && custo <= 25000) {
    distribuidor = (custo * 10) / 100;
    imposto = (custo * 15) / 100;
  } else if (custo > 25000) {
    // custo é negativo
    distribuidor = (custo * 15) / 100;
    imposto = (custo * 20) / 100;
  } else {
    document.getElementById("consumidor").innerHTML = "Custo negativo";
    return; // sai da função
  }
  let consumidor = custo + distribuidor + imposto;
  document.getElementById(
    "consumidor"
  ).innerHTML = `Custo da fábrica ${custo} <br/> Distribuidor ${distribuidor} <br/> Imposto ${imposto} <br/> Valor ao consumidor ${consumidor}`;
} // fecha função
