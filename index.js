const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para desenvolvimento de páginas web",
        "Um tipo de café famoso pela sua qualidade",
        "Um sistema operacional para dispositivos móveis",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita de valores, verificando igualdade de valor e tipo de dado",
        "Concatenação de strings",
        "Operador de subtração",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var x = 10;",
        "variavel x = 10;",
        "x = 10;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um bloco de código reutilizável que executa uma determinada tarefa",
        "Um número aleatório",
        "Uma string de caracteres",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Selecionar um elemento HTML com base em um seletor CSS",
        "Calcular uma operação matemática",
        "Definir o estilo de um elemento HTML",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma 'promise' em JavaScript?",
      respostas: [
        "Um objeto usado para representar o resultado de uma operação assíncrona",
        "Uma declaração condicional",
        "Um tipo de variável",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' em JavaScript?",
      respostas: [
        "let permite reatribuição de valor, enquanto const não permite",
        "const é usado para criar funções, enquanto let é usado para declarar constantes",
        "Não há diferença entre let e const",
      ],
      correta: 0
    },
    {
      pergunta: "O que é 'hoisting' em JavaScript?",
      respostas: [
        "O comportamento de mover declarações de variáveis e funções para o topo do seu escopo",
        "Um método de animação para elementos HTML",
        "Uma técnica para escrever comentários de múltiplas linhas",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a finalidade do método 'map()' em JavaScript?",
      respostas: [
        "Iterar sobre os elementos de um array e criar um novo array com os resultados de uma função aplicada a cada elemento",
        "Dividir uma string em substrings com base em um separador",
        "Adicionar um novo elemento no final de um array",
      ],
      correta: 0
    },
    {
      pergunta: "O que é 'scope' em JavaScript?",
      respostas: [
        "O contexto no qual as variáveis ​​são acessíveis",
        "Um tipo de estrutura de dados",
        "Um método para converter valores de uma string para números",
      ],
      correta: 0
    },
  ];

  // copiamos o id quiz do bloco div que fica fora do bloco template
  const quiz = document.querySelector('#quiz')

  // copiamos todo o bloco do 'template' do html
  const template = document.querySelector('template')

  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

  // loop ou laço de repetição das perguntas 
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    // loop ou laço de repetição das respostas
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
         const estaCorreta = event.target.value == item.correta

         corretas.delete(item)
         if(estaCorreta) {
           corretas.add(item)
         }

         mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      quizItem.querySelector('dl').appendChild(dt)
    }

    //remover a resposta que utilizamos como exemplo para fazer o clone
    quizItem.querySelector('dl dt').remove()


    //coloca a pergunta na tela 
    quiz.appendChild(quizItem)
  }

