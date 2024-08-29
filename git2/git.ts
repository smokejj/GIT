

class Commit {
    mensagem: string
    data: Date

    constructor(mensagem: string, data: Date) {
        this.mensagem = mensagem
        this.data = data
    }
}

class Branch {
    nome : string
    dataCriacao : Date
    commits : Array <any>
    branchPai : Branch | null


    constructor(nome: string, dataCriacao: Date, branchPai: Branch | null = null) {
        this.nome = nome
        this.dataCriacao = dataCriacao
        this.commits = []
        this.branchPai = branchPai
    }
    
    criarCommit(mensagem: string): void {
        const newCommit = new Commit(mensagem, new Date())
        this.commits.push(newCommit)
    }
    
    merge(outraBranch): void{
        console.log(`Somando  ${outraBranch.nome} com a branch ${this.nome}`)
        this.commits.push(outraBranch.commits)
        outraBranch.branchPai = this 
    }
    checkout(): void {
        console.log(`Trocando para a branch ${this.nome}`)

    }
    monstrarHistorico(): void{
        console.log(`${this.commits}`)
    }
}

class BranchMaster extends Branch{

    criarNovaBranch(nome : string,dataCriacao : Date): Branch{
        let newBranch = new Branch (nome,dataCriacao)
        return newBranch
    }


}

class BrachDevelop extends Branch{

    finalizarSprint(): void {
        console.log('Sprint finalizada. Preparando a branch para ser mesclada na branch release.');
       
    }

}

class BranchHotfix extends Branch{

    corrigirBug(descricao: string): void {
        console.log(`Bug corrigido: ${descricao}`)
       
    }

}

class BranchFeature extends Branch{

    implementarFuncionalidade(descricao: string): void {
        console.log(`Funcionalidade adicionada : ${descricao}`)
        
    }

}