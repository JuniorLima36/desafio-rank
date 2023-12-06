class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar() {
    const ataque = this.obterAtaque()
    const mensagem = `O ${this.tipo} atacou usando ${ataque}`
    console.log(mensagem)
  }

  obterAtaque() {
    switch (this.tipo) {
      case 'mago':
        return 'sua magia'
      case 'guerreiro':
        return 'sua espada'
      case 'monge':
        return 'sua artes marciais'
      case 'ninja':
        return 'sua shuriken'
      default:
        return 'sua um ataque indefinido'
    }
  }
}

const heroiMago = new heroi('Merlin', 100, 'mago')
heroiMago.atacar()

const heroiGuerreiro = new heroi('Conan', 30, 'guerreiro')
heroiGuerreiro.atacar()