var rl = require('readline-sync')

 export class Repositorio {
    blob: Array<string> = []
    commit: Array<any> = []

    index(): boolean{
        let verificacao = rl.question('Voce realmente quer adicionar o arquivo: Sim ou Nao')
        if(verificacao.toLowerCase() == 'sim'){
            return true
        }else{
            return false
        }
    }
    setCommit(): void {
        let frase = rl.question('O que voce quer adicionar dentro do arquivo? ')
        if(this.index()){
            this.blob.push(frase)
            this.commit.push(this.blob[this.blob.length - 1])
        }
    }


    setBlob(): void{
        let frase = rl.questionINT("Qual você deseja modificar ? Fale o número")
          if(this.blob[0] === this.blob[this.blob.length -1]){
            this.blob = frase
            this.blob[0]()
        
        }
}
getBlod(): void{
let escolha = rl.question('Qual blob você quer ver? ')
console.log(this.commit[escolha - 1])
} 

 }
let test = new Repositorio()

test.setCommit()



