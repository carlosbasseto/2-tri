const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de descobrir uma nova biblioteca JavaScript que promete acelerar o desenvolvimento de interfaces web de forma significativa. Qual é o seu primeiro pensamento sobre como essa inovação pode impactar o desenvolvimento web?",
        alternativas: [
            {
                texto: "Isso é incrível!",
                afirmacao: "Você ficou empolgado com a possibilidade de criar interfaces mais dinâmicas e interativas com menos esforço."
            },
            {
                texto: "Isso pode ser arriscado.",
                afirmacao: "Você ficou preocupado com a estabilidade e a compatibilidade da nova biblioteca com projetos existentes."
            }
        ]
    },
    {
        enunciado: "Sua equipe de desenvolvimento decidiu adotar a nova biblioteca em um projeto crucial. No entanto, você foi designado para integrar essa nova tecnologia. Como você reage?",
        alternativas: [
            {
                texto: "Mergulha na documentação da biblioteca e começa a realizar testes para garantir que tudo funcione perfeitamente.",
                afirmacao: "Você rapidamente entendeu a nova ferramenta e começou a aplicá-la no projeto, assegurando sua integração sem problemas."
            },
            {
                texto: "Sente-se inseguro com a nova tecnologia e prefere sugerir uma abordagem mais tradicional para evitar possíveis complicações.",
                afirmacao: "Você optou por uma solução mais segura, preferindo métodos comprovados para evitar riscos no projeto."
            }
        ]
    },
    {
        enunciado: "Durante o desenvolvimento, você encontra uma funcionalidade da nova biblioteca que parece revolucionária, mas a documentação é escassa. Qual é a sua abordagem?",
        alternativas: [
            {
                texto: "Experimenta a funcionalidade em um ambiente de testes para compreender seu funcionamento.",
                afirmacao: "Você conseguiu entender como a nova funcionalidade opera e descobriu maneiras inovadoras de aplicá-la em seu projeto."
            },
            {
                texto: "Ignora essa funcionalidade por agora e se concentra em outras partes do projeto com documentação mais sólida.",
                afirmacao: "Você decidiu focar em áreas mais estáveis do projeto, evitando potenciais problemas devido à falta de informações."
            }
        ]
    },
    {
        enunciado: "No meio do projeto, você percebe que a nova biblioteca está causando alguns problemas de performance. O que você faz?",
        alternativas: [
            {
                texto: "Investiga a origem dos problemas e tenta otimizá-la ou substituí-la por outra solução.",
                afirmacao: "Você encontrou formas de melhorar a performance e garantir que o projeto continue rodando sem problemas."
            },
            {
                texto: "Sugere à equipe voltar à tecnologia anterior para garantir que o projeto seja concluído dentro do prazo.",
                afirmacao: "Você preferiu priorizar a estabilidade e o prazo do projeto, propondo uma solução mais segura."
            }
        ]
    },
    {
        enunciado: "Com o projeto prestes a ser finalizado, um membro da equipe sugere adicionar mais algumas funcionalidades usando a nova biblioteca. Como você responde?",
        alternativas: [
            {
                texto: "Aceita o desafio e começa a implementar as novas funcionalidades com entusiasmo.",
                afirmacao: "Você implementou as novas funcionalidades com sucesso, agregando ainda mais valor ao projeto."
            },
            {
                texto: "Adverte sobre os riscos de adicionar novas funcionalidades tão perto do prazo final.",
                afirmacao: "Você ajudou a equipe a evitar potenciais atrasos e problemas de última hora, garantindo a entrega no prazo."
            }
        ]
    }
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
    caixaPerguntas.textContent = "No futuro do desenvolvimento web...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
