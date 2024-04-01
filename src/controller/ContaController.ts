import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

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
        
    }
    depositar(numero: number, valor: number): void {
        
    }
    tranferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        
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

