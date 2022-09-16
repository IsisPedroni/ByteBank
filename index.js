import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const clienteUm = new Cliente();
clienteUm.nome = "Isis";
clienteUm.cpf = 11122233309;

const clienteDois = new Cliente();
clienteDois.nome = "Alice";
clienteDois.cpf = 88822233309;


const contaCorrenteIsis = new ContaCorrente();
contaCorrenteIsis.agencia = 1001;
contaCorrenteIsis.cliente = clienteUm;
contaCorrenteIsis.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = clienteDois;
conta2.agencia = 102;

let valor = 200;
contaCorrenteIsis.tranferir(valor, conta2);

console.log("valor: ", valor)
console.log(conta2);


// console.log(contaCorrenteIsis);

