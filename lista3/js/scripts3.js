function exe1() {
  // recupera os dados do usuário
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  let c = Number(document.getElementById("c").value);
  let d = Number(document.getElementById("d").value);

  let i = 1; // variável que conta quantas vezes o laço vai se repetir
  let aux; // será utilizada nas trocas das variáveis a, b, c e d
  while (i <= 3) {
    if (a > b) {
      aux = a;
      a = b;
      b = aux;
    }
    if (b > c) {
      aux = b;
      b = c;
      c = aux;
    }
    if (c > d) {
      aux = c;
      c = d;
      d = aux;
    }
    i++; // incrementa i
  }
  document.getElementById(
    "ordena"
  ).innerHTML = `Ordem crescente ${a} ${b} ${c} ${d} e ordem decrescente ${d} ${c} ${b} ${a}`;
}
function exe200() {
  let preco = 5.0;
  let qntd = 120;
  let despesas = 200;
  let lucro = " ";
  let saida = "";
  while (preco >= 1.0) {
    lucro = preco * qntd - despesas;
    saida = saida + `${preco}-${qntd}-${despesas}-${lucro}<br/>`;
    preco = preco - 0.5;
    qntd = qntd + 26;
    document.getElementById("tabela").innerHTML = "saida";
  }
  saida;
}
function exe2() {
  let preco = 5.0;
  let qntd = 120;
  const despesas = 200;
  let saida =
    "<table border='1'><tr><th>Preço</th><th>Quantidade</th><th>Despesas</th><th>Lucro</th></tr>";

  while (preco >= 1.0) {
    const lucro = preco * qntd - despesas;
    saida += `<tr><td>R$ ${preco.toFixed(
      2
    )}</td><td>${qntd}</td><td>R$ ${despesas}</td><td>R$ ${lucro.toFixed(
      2
    )}</td></tr>`;
    preco -= 0.5;
    qntd += 26;
  }

  saida += "</table>";
  document.getElementById("tabela").innerHTML = saida;
}
function exe4() {
  let numero = Number(document.getElementById("numero").value);
  let resultado = "";
  for (let i = 0; i <= 10; i++) {
    resultado += `${numero}* ${i}=${numero}</br>`;
  }
  document.getElementById("resultado").innerHTML = resultado;
}
function exe5() {
  let resultado = "";
  for (let numero = 0; numero <= 10; numero++) {
    resultado += `tabuada do ${numero}<br/>`;
    for (let i = 0; i <= 10; i++) {
      resultado += `${numero}*${i}=${numero * i}<br/>`;
    }
  }
  document.getElementById("resultado").innerHTML = resultado;
}
function exe6() {
  let codigo,
    valor,
    totalVista = 0,
    totalPrazo = 0;
  for (let i = 1; i <= 5; i++) {
    do {
      codigo = prompt(`Digite V (a vista) ou P (a prazo)${i}`).toUpperCase();
    } while (codigo != "V" && codigo != "P");
    valor = Number(prompt(`Digite o valor da transação ${i}`));
    if (codigo == "V") {
      totalVista += valor;
    } else {
      totalPrazo += valor;
    }
  }
  document.getElementById(
    "resultado"
  ).innerHTML = `Total à vista ${totalVista} Total à prazo ${totalPrazo}, total geral ${
    totalPrazo + totalVista
  } e valor da primeira parcela ${totalPrazo / 3}`;
}
function exe7() {
  let idade,
    altura,
    peso,
    idade50 = 0,
    idade10e20 = 0,
    somaAltura = 0,
    peso40 = 0;
  for (let i = 0; i <= 5; i++) {
    do {
      idade = Number(prompt(`informe a idade${i}`));
    } while (idade < 0);
    altura = Number(prompt(`Informe a altura${i}`));
    peso = Number(prompt(`Informe o peso${i}`));

    if (idade > 50) {
      idade50++;
    }
    if (idade >= 10 && idade <= 20) {
      idade10e20++;
      somaAltura += altura;
    }
    if (peso < 40) {
      peso40++;
    }
  }
  document.getElementById(
    "resultado"
  ).innerHTML = `<br/> item 1 ${idade50} <br/> Item 2 ${
    somaAltura / idade10e20
  } <br/> Item 3 ${peso40}1`;
}
function exe8() {
  let idade, altura, peso, olhos, cabelos;
  let idade50peso60 = 0,
    somaIdade = 0,
    qntdAltura150 = 0;
  let qntdeAzuis = 0,
    qntdeRuivo = 0;

  for (let i = 1; i <= 3; i++) {
    idade = Number(prompt(`informe idade ${i}`));
    altura = Number(prompt(`informe a altura${i}`));
    peso = Number(prompt(`informe peso${i}`));
    do {
      cabelos = prompt(`informe cor dos cabelos`).toLocaleUpperCase();
    } while (
      cabelos != "P" &&
      cabelos != "C" &&
      cabelos != "L" &&
      cabelos != "R"
    );
    do {
      olhos = prompt(`informe cor dos olhos${i}`).toLocaleUpperCase();
    } while (olhos != "A" && olhos != "P" && olhos != "V" && olhos != "C");

    if (idade > 50 && peso < 60) {
      idade50peso60++;
    }
    if (altura < 1.5) {
      somaIdade += idade;
      qntdAltura150++;
    }
    if (olhos == "A") {
      qntdeAzuis++;
    }
    if (cabelos == "R" && olhos != "A") {
      qntdeRuivo++;
    }
  }
  document.getElementById(
    "resultado"
  ).innerHTML = `Item 1 ${idade50peso60} Item 2 ${
    soma / qntdAltura150
  } Item 3 ${qntdeAzuis} Item 4 ${qntdeRuivo}`;
}

function exe9() {
  let idade,
    peso,
    altura,
    somaIdade = 0,
    pesoEaltura = 0,
    qtde = 0,
    porcentagem;
  for (let i = 1; i <= 10; i++) {
    do {
      idade = Number(prompt(`Informe a idade${i}`));
    } while (idade < 0);
    do {
      altura = Number(prompt(`Informe a altura${i}`));
    } while (altura < 0);
    do {
      peso = Number(prompt(`Informe a peso${i}`));
    } while (peso < 0);
    somaIdade += idade; // item 1
    if (peso > 90 && altura < 1.5) {
      // item 2
      pesoEaltura++;
    }
    if (idade >= 10 && idade <= 30 && altura > 1.9) {
      //item 3
      qtde++;
    }
  }
  if (qtde == 0) {
    porcentagem = "0%";
  } else {
    porcentagem = (qtde / 10) * 100;
  }
  document.getElementById("resultado").innerHTML = `Item 1: ${
    somaIdade / 10
  } <br/> Item 2: ${pesoEaltura} <br/> Item 3: ${porcentagem}%`;
}
function exe10() {
  let nro,
    i,
    contador,
    j,
    somaPrimo = 0,
    somaImpar = 0;
  for (i = 1; i <= 10; i++) {
    nro = Number(prompt("Digite um número"));
    contador = 0;
    for (j = 1; j <= nro; j++) {
      if (nro % j == 0) {
        contador++;
      }
    }
    if (contador == 2) {
      somaPrimo += nro;
    }
    if (nro % 2 != 0) {
      somaImpar += nro;
    }
  }
  document.getElementById(
    "resultado"
  ).innerHTML = `Soma nº Primo: ${somaPrimo} <br/> Soma nº ímpares: ${somaImpar}`;
}
