import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const clienteUm = new Cliente("Isis", 11122233309);
const clienteDois = new Cliente("Alice", 88822233309);

const contaCorrenteUm = new ContaCorrente(clienteUm, 1001);


contaCorrenteUm.depositar(500);
const contaCorrenteDois = new ContaCorrente(clienteDois, 2002);

let valor = 200;
contaCorrenteUm.tranferir(valor, contaCorrenteDois); 


console.log(ContaCorrente.numeroDeContas);

