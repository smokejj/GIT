
var rl = require('readline-sync')

export class Branch{
   public nome: string
   public dataCriacao: string
   public commits: Array<string> = []
   public branchPai: Branch
   

    constructor(nome: string,dataCriacao:string){
        this.nome = nome
        this.dataCriacao = dataCriacao
    }

   public criarCommit(): void{
        let frase = rl.question('Fale o que voce quer adicionar no commit: ')
        this.commits.push(frase)
    }

   public merge(outraBranch: Branch): void{
        this.commits.concat(outraBranch.commits)
    }

    checkout(): number{
      let escolha = rl.questionInt('Qual branch voce quer escolher: ')

      return escolha
    }

    mostrarHistorico(): void{
      console.log(this.commits);
      
  }
}

export class branchMaster extends Branch{
    criarBranch(nome: string,data: string): branchMaster{
      let newBranch = new branchMaster(nome,data)

      return newBranch
  }
}

export class BranchDevelop extends Branch{
    finalizarSprint(branchRelease): void{
      this.merge(branchRelease)
  }
}

export class BranchHotfix extends Branch{
    corrigirBug(descricao: string): void{
      this.commits.push(descricao)
  }
}

export class BranchFeature extends Branch{
    implementaFuncionalidade(descricao): void{
      this.commits.push(descricao)
  }
}

export class BranchRelease extends Branch{
    promoverParaProducao(): void{
      console.log(`${this.commits}
        Esta branch esta pronta pra ser lançada`);
      
  }
}