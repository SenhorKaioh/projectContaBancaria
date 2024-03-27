import readlinesync = require("readline-sync");
import { colors } from './src/util/Cores';
import { Conta } from './model/Conta';

export function main(){

let cod: number;

let c1: Conta = new Conta(1, 123, 1, "Caio", 1000);
c1.visualizar();
c1.sacar(100);
c1.visualizar();
c1.depositar(500);
c1.visualizar();




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
                    keyPress()
                break;
            case 2:
                console.log(colors.fg.magenta,
                    "\n\nListar todas as Contas\n\n", colors.reset);
                    keyPress()
                break;
            case 3:
                console.log(colors.fg.magenta,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                    keyPress()
                break;
            case 4:
                console.log(colors.fg.magenta,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);
                    keyPress()
                break;
            case 5:
                console.log(colors.fg.magenta,
                    "\n\nApagar uma Conta\n\n", colors.reset);
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