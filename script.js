const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Em 1876, na tranquila vila de Dharampur, um surto de uma doença misteriosa começou a afetar seus habitantes. Desorientação e confusão mental se espalhavam como uma sombra. O curandeiro Rajesh decide investigar a causa.",
        alternativas: [
            {
                texto:"Ele descobriu que todos os afetados haviam consumido o leite de cabra produzido na vila.",
                afirmacao: "Essa descoberta levou Rajesh a focar no leite como a fonte do problema, permitindo que ele e Arjun identificassem a erva contaminada que estava afetando o leite. Com isso, implementaram uma solução eficaz que ajudou a erradicar a doença."
            },
            {
              texto:"Ele notou que os sintomas surgiam apenas após o consumo de alimentos preparados por um antigo cozinheiro.",
              afirmacao:"Rajesh investigou o cozinheiro, mas a conexão com a doença não ficou clara, levando a uma abordagem errada para o tratamento. A doença continuou a se espalhar, e a vila enfrentou mais dificuldades antes de encontrar a verdadeira causa."
            },
        ]
    },
    {
      enunciado:"Qual foi a principal descoberta de Rajesh nos antigos manuscritos?",
      alternativas:
      [
        {
          texto:"Esta descoberta levou Rajesh e Arjun a perceberem que a doença tinha uma origem mágica e não apenas física. Eles então se concentraram na purificação e remoção da erva contaminada, resultando na recuperação da vila.",
          afirmacao:"Esta descoberta levou Rajesh e Arjun a perceberem que a doença tinha uma origem mágica e não apenas física. Eles então se concentraram na purificação e remoção da erva contaminada, resultando na recuperação da vila."
        },
        {
          texto:"Revelavam uma forma de envenenamento cerebral causada por um tipo raro de fungo encontrado nas ervas locais.",
          afirmacao:" A crença de que a doença era causada por um fungo levou a medidas de controle mais tradicionais, como a substituição do leite. No entanto, isso não foi suficiente para resolver o problema, e a verdadeira causa da doença não foi tratada adequadamente."
        }
      ]
    },
    {
      enunciado:"Como o sábio Arjun contribuiu para a solução do problema?",
      alternativas:[
        {
          texto:"Ele revelou que a doença era uma maldição de uma disputa antiga e que o leite contaminado era o veículo da maldição.",
          afirmacao:"Com a compreensão da origem da maldição, Rajesh e Arjun puderam focar na erradicação da erva contaminada e realizar rituais de purificação."
        },
        {
          texto:" Ele sugeriu que a doença era uma infecção de origem externa e recomendou a quarentena dos afetados.",
          afirmacao:"A quarentena não resolveu a causa raiz da doença, que estava ligada ao leite contaminado. A infecção continuou a se espalhar, e a vila enfrentou uma crise prolongada até que a verdadeira causa fosse identificada."
        }
      ]
    },
    {
      enunciado:"Qual foi a estratégia de Rajesh e Arjun para combater a contaminação? ",
      alternativas: [
        {
          texto:" Eles identificaram e eliminaram a erva contaminada dos campos e mudaram o método de alimentação das cabras.",
          afirmacao:"A eliminação da erva contaminada e a mudança na alimentação das cabras resultaram na interrupção da propagação da doença. Com isso, a saúde dos habitantes foi restaurada, e a vila voltou a prosperar."
        },
        {
          texto:" Eles substituíram o leite de cabra contaminado por leite de vaca e aumentaram a higiene nas instalações.",
          afirmacao:"Embora a substituição do leite de cabra tenha ajudado a reduzir os sintomas em alguns casos, a verdadeira causa da doença não foi completamente tratada. A doença persistiu em uma forma mais branda até que medidas mais eficazes fossem adotadas."
        }
      ]
    },
    {
      enunciado:"Qual foi o resultado das ações de Rajesh e Arjun para a vila?",
      alternativas: [
        {
          texto:"A doença começou a desaparecer, e a paz foi restaurada, com Dharampur recuperando sua tranquilidade.",
          afirmacao:" A vila voltou ao normal, com a saúde dos habitantes restaurada e a confiança na liderança de Rajesh e Arjun fortalecida. A história do surto se tornou uma lenda de superação e cura."
        },
        {
          texto:" A doença continuou a se espalhar, levando a uma diminuição da população e ao eventual abandono da vila.",
          afirmacao:" A persistência da doença e a incapacidade de encontrar uma solução eficaz causaram um declínio na população e a eventual desintegração da comunidade. Dharampur se tornou uma vila abandonada, um lembrete sombrio das consequências de não resolver um problema em sua raiz."
        }
      ]
    },
  ];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
