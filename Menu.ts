import readlinesync = require("readline-sync");
import { colors } from './src/util/Cores';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main(){
 
let cod, numero, agencia, tipo, saldo, limite , aniversario: number;
let titular : string;
const tipoContas = [' Conta Corrente', 'Conta Poupanca'];

// Instância de Classe ContaController  
let Contas: ContaController = new ContaController();

let cc1: ContaCorrente = new ContaCorrente(Contas.gerarNumero(), 1508, 1, "Lucas", 2500, 500);
Contas.cadastrar(cc1);

let cp1: ContaPoupanca = new ContaPoupanca(Contas.gerarNumero(), 1235, 2, "Luis", 5000, 600);
Contas.cadastrar(cp1);


while(true) {

console.log(colors.bg.black, colors.fg.yellowstrong,
            "                                                  ")
console.log("|*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*|")
console.log("|     SEJA BEM-VINDO AO BANCO CARIOCAS           -|")
console.log("|                                                -|")
console.log("|                                                -|")
console.log("|-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-|")
console.log("|                                                -|")
console.log("|                                                -|")
console.log("|        1 - Criar Conta                         -|")
console.log("|        2 - Listar todas as contas              -|")
console.log("|        3 - Buscar Conta por Numero             -|")
console.log("|        4 - Atualizar Dados da conta            -|")
console.log("|        5 - Apagar a Conta                      -|")
console.log("|        6 - Sacar                               -|")
console.log("|        7 - Depositar                           -|")
console.log("|        8 - Transferir valores entre Contas     -|")
console.log("|        9 - Sair                                -|")
console.log("|                                                -|")
console.log("|                                                -|")
console.log("|-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-|")
console.log("                                                   ",colors.reset);

console.log("Entre com a opção desejada: ");
cod = readlinesync.questionInt("");

if (cod === 9){
    console.log("\nBANCO CARIOCAS - SUA VIDA FINANCEIRO MELHOR TODO DIA!");
    sobre();
    process.exit(0);
}
switch(cod){
            case 1:
                console.log(colors.fg.magenta,
                    "\n\nCriar Conta\n\n", colors.reset);
                    
                 console.log("Digite o Número da Agência: ")
                 agencia = readlinesync.questionInt(" ")
                 console.log("Digite o NOME DO Titular: ")
                 titular = readlinesync.question(" ")
                 console.log("Informe o tipo da Conta: ")
                 tipo = readlinesync.keyInSelect(tipoContas, "", {cancel: false}) + 1
                 console.log("Digite o Saldo da Conta: ")
                 saldo = readlinesync.questionFloat(" ")

                 switch(tipo) {
                    case 1:
                            console.log("Digite o Limite da Conta (R$): ");
                            limite = readlinesync.questionFloat("");
                            Contas.atualizar(
                                new ContaCorrente(Contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                            break;

                    case 2:
                    console.log("Digite o Aniversário da Conta Poupanca: ")
                    aniversario = readlinesync.questionInt("")
                    Contas.cadastrar(new ContaPoupanca(Contas.gerarNumero(), agencia, tipo, titular,saldo, aniversario))
                    break;
                 }
                    keyPress()
                break;
            case 2:
                console.log(colors.fg.magenta,
                    "\n\nListar todas as Contas\n\n", colors.reset);

                    Contas.listarTodas()
                    keyPress()
                break;
            case 3:
                console.log(colors.fg.magenta,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                    
                    console.log("Digite o Número da Agência: ")
                    numero = readlinesync.questionInt(" ") 

                    Contas.procurarPorNumero(numero);

                    keyPress()
                break;
            case 4:
                console.log(colors.fg.magenta,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                    console.log("Digite o Número da Conta: ")
                    numero = readlinesync.questionInt("") 

                    let conta = Contas.buscarNoArray(numero)

                    if(conta != null){
                        console.log("Digite o Número da agência: ");
                        agencia = readlinesync.questionInt("");
    
                        console.log("Digite o Nome do Titular da conta: ");
                        titular = readlinesync.question("");
    
                        tipo = conta.tipo;

                        console.log("\nDigite o Saldo da conta (R$): ");
                        saldo = readlinesync.questionFloat("");

                        switch (tipo) {
                        case 1:
                            console.log("Digite o Limite da Conta (R$): ");
                            limite = readlinesync.questionFloat("");
                            Contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));

                            break;

                        case 2:
                            console.log("Digite o Dia do aniversário da Conta: ");
                            aniversario = readlinesync.questionFloat("");
                            Contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));

                            break;    
                        } }
                        else {
                            console.log("Conta não encontrada!");
                        }
                    
                    keyPress()
                break;
            case 5:
                console.log(colors.fg.magenta,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");
                Contas.deletar(numero);

                    keyPress()
                break;
            case 6:
                console.log(colors.fg.magenta,
                    "\n\nSaque\n\n", colors.reset);
                    keyPress()
                break;
            case 7:
                console.log(colors.fg.magenta,
                    "\n\nDepósito\n\n", colors.reset);
                    keyPress()

                break;
            case 8:
                console.log(colors.fg.magenta,
                    "\n\nTransferência entre Contas\n\n", colors.reset);
                    keyPress()

                break;
            default:
                console.log(colors.fg.magenta,
                    "\nOpção Inválida!\n", colors.reset);
                    keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Caio Pereira - Caiopsantos.dev@gmail.com");
    console.log("github.com/SenhorKaioh");
    console.log("*****************************************************");
}
function keyPress(): void{
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();