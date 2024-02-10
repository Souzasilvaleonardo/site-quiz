const perguntas = [
  {
    pergunta: "O que é uma consultora de moda?",
    respostas: [
      "Uma profissional especializada em consertar roupas",
      "Uma pessoa que trabalha na indústria têxtil",
      "Uma especialista em ajudar indivíduos a escolherem roupas e acessórios adequados ao seu estilo e corpo",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o principal objetivo de uma consultora de moda?",
    respostas: [
      "Vender roupas de marca",
      "Criar tendências de moda",
      "Ajudar os clientes a desenvolverem sua própria identidade visual e se sentirem confiantes com sua aparência",
    ],
    correta: 2
  },
  {
    pergunta: "Quais são as habilidades necessárias para ser uma boa consultora de moda?",
    respostas: [
      "Conhecimento em maquiagem",
      "Experiência em vendas",
      "Capacidade de análise de estilo, conhecimento das tendências da moda e habilidades de comunicação",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o papel de uma consultora de moda em uma sessão de consultoria?",
    respostas: [
      "Determinar o preço das roupas",
      "Aconselhar os clientes sobre o que vestir com base em seu gosto pessoal",
      "Realizar operações de caixa",
    ],
    correta: 1
  },
  {
    pergunta: "O que é um 'personal shopper'?",
    respostas: [
      "Um tipo de loja de roupas online",
      "Uma pessoa que ajuda os clientes a escolherem roupas e acessórios, muitas vezes fazendo compras em nome deles",
      "Um termo para um tipo específico de calçado",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a importância da consultoria de moda?",
    respostas: [
      "Aumentar o preço das roupas",
      "Ajudar as pessoas a se sentirem confortáveis com sua aparência e a expressarem sua individualidade através da moda",
      "Promover marcas de moda famosas",
    ],
    correta: 1
  },
  {
    pergunta: "O que é um 'lookbook'?",
    respostas: [
      "Uma espécie de catálogo de roupas e acessórios",
      "Um tipo de evento de moda",
      "Um acessório usado para amarrar os cabelos",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a diferença entre 'estilo' e 'moda'?",
    respostas: [
      "Não há diferença entre os dois termos",
      "Estilo se refere a tendências temporárias, enquanto moda é uma expressão pessoal duradoura",
      "Moda se refere a tendências temporárias, enquanto estilo é uma expressão pessoal duradoura",
    ],
    correta: 2
  },
  {
    pergunta: "O que é um 'personal stylist'?",
    respostas: [
      "Um termo para um tipo de tecido",
      "Uma pessoa que projeta roupas exclusivas para clientes famosos",
      "Um profissional que ajuda os indivíduos a desenvolverem um estilo pessoal e a escolherem roupas que realcem sua aparência",
    ],
    correta: 2
  },
  {
    pergunta: "O que é 'acessibilidade na moda'?",
    respostas: [
      "A disponibilidade de roupas de luxo",
      "A prática de tornar a moda acessível a pessoas de todas as idades",
      "A adaptação de roupas e acessórios para pessoas com deficiência",
    ],
    correta: 2
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

