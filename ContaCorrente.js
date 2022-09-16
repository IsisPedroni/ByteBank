export class ContaCorrente{
    agencia;
    cliente;

    _saldo = 0;
    

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}


//METODO DEPOSITAR = o return esta realizando verificações antes de executarmos a operação em si. A técnica early return, consiste em verificarmos todas as situações indesejadas primeiro. Por exemplo, no método depositar() não queremos que o valor recebido seja menor ou igual a zero. Caso isso aconteça, simplesmente usaremos a instrução return para pararmos a execução do código.