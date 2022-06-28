const nomeCartao = "ana"
  const numeroCartao = 123456789
  const codigoCartao = 123

function verificarDados(nome, numero, codigo) {

const nomeCorreto = nome === nomeCartao
  if (nomeCorreto) {
    console.log('nome está correto')
  } else {
    console.log("nome está errado")
  };

const numeroCorreto = numero === numeroCartao
  if (numeroCorreto) {
    console.log("número está correto")
  } else {
    console.log("número está errado")
  };

const codigoCorreto = codigo === codigoCartao
  if (codigoCorreto) {
    console.log("código está correto")
  } else {
    console.log("código está errado")
  };

const dadosCorretos = nomeCorreto && numeroCorreto && codigoCorreto
return dadosCorretos
};

const cartaoValido = verificarDados("ana", 123456789, 123);
console.log(cartaoValido);
