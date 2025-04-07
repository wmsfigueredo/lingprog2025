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
