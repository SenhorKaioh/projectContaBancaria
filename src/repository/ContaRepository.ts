import { Conta } from "../model/Conta";

export interface ContaRepository{

    procurarPorNumero(numero: number):void;
    listarTodas():void;
    cadastrar(Conta: Conta):void;
    atualizar(Conta: Conta):void;
    deletar(numero: number):void;
    procurarPorTitular(Titular: string):void;
    sacar(numero:number, valor: number): void;
    depositar(numero:number, valor: number): void;
    tranferir(numeroOrigem:number, numeroDestino: number, valor: number): void;
}