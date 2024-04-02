import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Cores";

export class ContaController implements ContaRepository{
    procurarPorTitular(titular: string) {
        let listaContasPorTitular = this.listaContas.filter( c => 
            c.titular.toLocaleUpperCase().includes(titular.toLocaleUpperCase()));
            for( let conta of listaContasPorTitular ){
                conta.visualizar();
            }
    }    

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null){
            buscaConta.visualizar();
        }else
           console.log("\nA Conta não foi Encontrada!");
    }

    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
    }
    }
    cadastrar(conta: Conta): void {
       this.listaContas.push(conta)
        console.log("A Conta foi cadastrada")
    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta !== null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
           console.log(`A conta número ${conta.numero} foi Atualizada com êxito!`)
        }else
           console.log("\nA Conta não foi Encontrada!");
    }
    deletar(numero: number): void {

        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null){
            this.listaContas.slice(this.listaContas.indexOf(buscaConta), 1)
           console.log(`A conta número ${numero} foi Apagada com êxito!`)
        }else
           console.log("\nA Conta não foi Encontrada!");
    }
    
    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if(conta !== null){

        if(conta.sacar(valor) === true)
          console.log(colors.fg.green, "\nO Saque foi um sucesso", colors.reset);
        }
        else{
            console.log(colors.fg.red, "\nERROR: Não é possivel efetuar o saque!", colors.reset);
        }
    
    }
    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if(conta != null){
        conta.depositar(valor)
          console.log(colors.fg.green, "\nO Depósito foi um sucesso", colors.reset);
        }
        else{
            console.log(colors.fg.red, "\nERROR: Não é possivel efetuar o deposito!", colors.reset);
        }
    }
    tranferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if(contaOrigem != null && contaDestino != null){

            if(contaOrigem.sacar(valor) === true){
                contaDestino.depositar(valor);
                console.log(colors.fg.green,"\nA Transferência da conta numero: " + numeroOrigem +
                 " para a Conta numero: " + numeroDestino + " foi efetuada com sucesso!", colors.reset)

            } else {
                console.log(colors.fg.red,"\nA Conta número: " + numeroOrigem +
                " e/ou a Conta número: " + numeroDestino + " não foram encontradas!", colors.reset)
            }
        }
    }
    public buscarNoArray(numero: number): Conta | null {

        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }
        return null;
    }
 //metodos Auxiliares

 public gerarNumero(): number{
    return ++ this.numero
 }

}

