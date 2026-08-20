/* =========================================
   PRESENTE PRA YUYU
   VERSÃO 2
   ABERTURA + INVESTIGAÇÃO
========================================= */


/* =========================================
   CONFIGURAÇÕES
========================================= */

const TEMPO_INICIAL = 10000;

const TEMPO_MENSAGEM = 5000;


/* =========================================
   ELEMENTOS
========================================= */

const intro =
    document.getElementById("intro");

const loveMessage =
    document.getElementById("loveMessage");

const investigation =
    document.getElementById("investigation");

const questions =
    document.getElementById("questions");

const caseComplete =
    document.getElementById("caseComplete");

const pullUp =
    document.getElementById("pullUp");

const particles =
    document.getElementById("particles");

const startInvestigation =
    document.getElementById("startInvestigation");

const answerInput =
    document.getElementById("answerInput");

const answerButton =
    document.getElementById("answerButton");

const hintButton =
    document.getElementById("hintButton");

const hintBox =
    document.getElementById("hintBox");

const resultBox =
    document.getElementById("resultBox");

const nextButton =
    document.getElementById("nextButton");

const evidenceNumber =
    document.getElementById("evidenceNumber");

const questionTitle =
    document.getElementById("questionTitle");

const questionDescription =
    document.getElementById("questionDescription");

const continueButton =
    document.getElementById("continueButton");


/* =========================================
   BANCO DE EVIDÊNCIAS
========================================= */

const evidencias = [

    {
        numero: "01",

        pergunta:
            "Onde tudo começou?",

        respostas: [
            "alone",
            "sozinho",
            "sozinho e triste",
            "alone roblox",
            "jogo alone",
            "jogo do roblox alone"
        ],

        dica:
            "Foi dentro de um jogo... e o nome dele combina bastante com \"sozinho\".",

        sucesso:
            "✓ EVIDÊNCIA CONFIRMADA<br><br>" +
            "ALONE — ROBLOX<br><br>" +
            "<small>Foi aqui que tudo começou...</small>"
    },


    {
        numero: "02",

        pergunta:
            "Onde nós dormíamos em call?",

        respostas: [
            "discord",
            "discord call",
            "call no discord",
            "call discord"
        ],

        dica:
            "Era onde nossas conversas continuavam mesmo quando o sono chegava...",

        sucesso:
            "✓ EVIDÊNCIA CONFIRMADA<br><br>" +
            "DISCORD<br><br>" +
            "<small>Algumas noites terminavam em silêncio... " +
            "mas nunca sozinhos. ❤️</small>"
    },


    {
        numero: "03",

        pergunta:
            "Quando nós começamos a namorar?",

        respostas: [
            "14/06",
            "14/06/2026",
            "14 de junho",
            "14 de junho de 2026"
        ],

        dica:
            "O dia em que deixamos de ser apenas uma história começando... " +
            "e começamos a escrever a nossa.",

        sucesso:
            "✓ EVIDÊNCIA CONFIRMADA<br><br>" +
            "14 DE JUNHO<br><br>" +
            "<small>O dia em que nossa história ganhou um novo capítulo. ❤️</small>"
    },


    {
        numero: "04",

        pergunta:
            "O que eu mais admiro em você?",

        respostas: [
            "tudo",
            "tudinho",
            "tudo em você",
            "tudinho em você"
        ],

        dica:
            "Talvez a resposta seja maior do que uma única qualidade...",

        sucesso:
            "✓ EVIDÊNCIA CONFIRMADA<br><br>" +
            "RESPOSTA: TUDO<br><br>" +
            "<small>Seu jeito, seu carinho, suas manias, " +
            "seu sorriso... tudinho. ❤️</small>"
    },


    {
        numero: "05",

        pergunta:
            "O que eu mais quero fazer com você?",

        respostas: [
            "casar",
            "casamento",
            "me casar",
            "me casar com você",
            "casar com você"
        ],

        dica:
            "Talvez a resposta esteja escondida em uma evidência " +
            "que você ainda nem encontrou... 💍",

        sucesso:
            "✓ EVIDÊNCIA CONFIRMADA<br><br>" +
            "CASAR.<br><br>" +
            "<small>Você acertou! Mas tem uma coisa a mais aí...<br><br>" +
            "Segunda resposta: construir uma vida juntinhos. ❤️</small>"
    }

];


/* =========================================
   CONTROLE
========================================= */

let evidenciaAtual = 0;


/* =========================================
   NORMALIZAR RESPOSTAS
========================================= */

function normalizar(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[.,!?;:]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}


/* =========================================
   CRIAR PARTÍCULAS
========================================= */

function criarParticulas() {

    const quantidade = 35;

    for (let i = 0; i < quantidade; i++) {

        const particle =
            document.createElement("div");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDelay =
            Math.random() * 10 + "s";

        particle.style.animationDuration =
            (8 + Math.random() * 10) + "s";

        const tamanho =
            1 + Math.random() * 2;

        particle.style.width =
            tamanho + "px";

        particle.style.height =
            tamanho + "px";

        particles.appendChild(particle);
    }
}


/* =========================================
   MOSTRAR MENSAGEM
========================================= */

function mostrarMensagem() {

    loveMessage.classList.remove("hidden");

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            loveMessage.classList.add("show");

        });

    });
}


/* =========================================
   ESCONDER INTRO
========================================= */

function esconderMensagem() {

    loveMessage.classList.remove("show");

    setTimeout(() => {

        intro.style.opacity = "0";

    }, 1000);


    setTimeout(() => {

        intro.classList.add("hidden");

        mostrarInvestigacao();

    }, 3000);
}


/* =========================================
   MOSTRAR INVESTIGAÇÃO
========================================= */

function mostrarInvestigacao() {

    investigation.classList.remove("hidden");

    investigation.style.opacity = "1";
}


/* =========================================
   MOSTRAR PERGUNTAS
========================================= */

function mostrarPerguntas() {

    investigation.classList.add("hidden");

    setTimeout(() => {

        questions.classList.remove("hidden");

        carregarEvidencia();

    }, 800);
}


/* =========================================
   CARREGAR EVIDÊNCIA
========================================= */

function carregarEvidencia() {

    const evidencia =
        evidencias[evidenciaAtual];

    evidenceNumber.textContent =
        `EVIDÊNCIA Nº ${evidencia.numero}`;

    questionTitle.textContent =
        evidencia.pergunta;

    answerInput.value = "";

    resultBox.innerHTML = "";

    hintBox.innerHTML =
        evidencia.dica;

    hintBox.classList.add("hidden");

    nextButton.classList.add("hidden");

    answerButton.disabled = false;

    answerInput.disabled = false;

    hintButton.disabled = false;

    answerInput.focus();
}


/* =========================================
   MOSTRAR DICA
========================================= */

hintButton.addEventListener(
    "click",
    () => {

        hintBox.classList.remove("hidden");

        hintButton.disabled = true;

        hintButton.textContent =
            "DICA REVELADA";

    }
);


/* =========================================
   VERIFICAR RESPOSTA
========================================= */

function verificarResposta() {

    const resposta =
        normalizar(answerInput.value);

    if (!resposta) {

        resultBox.innerHTML =
            `<div class="result-error">
                Digite uma resposta primeiro...
            </div>`;

        return;
    }


    const evidencia =
        evidencias[evidenciaAtual];


    const acertou =
        evidencia.respostas.some(
            respostaCorreta =>
                normalizar(respostaCorreta) === resposta
        );


    /* =====================================
       ACERTO
    ====================================== */

    if (acertou) {

        resultBox.innerHTML =
            `<div class="result-success">
                ${evidencia.sucesso}
            </div>`;

        answerButton.disabled = true;

        answerInput.disabled = true;

        hintButton.disabled = true;

        if (
            evidenciaAtual <
            evidencias.length - 1
        ) {

            nextButton.textContent =
                "PRÓXIMA EVIDÊNCIA →";

        } else {

            nextButton.textContent =
                "ENCERRAR INVESTIGAÇÃO →";

        }

        nextButton.classList.remove("hidden");

        return;
    }


    /* =====================================
       ERRO
    ====================================== */

    resultBox.innerHTML =
        `<div class="result-error">
            ✗ EVIDÊNCIA INCORRETA<br><br>
            <small>
                Essa resposta não corresponde
                aos registros encontrados.
            </small>
        </div>`;

}


/* =========================================
   BOTÃO INVESTIGAR
========================================= */

answerButton.addEventListener(
    "click",
    verificarResposta
);


/* =========================================
   ENTER NO CELULAR/TECLADO
========================================= */

answerInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            verificarResposta();

        }

    }
);


/* =========================================
   PRÓXIMA EVIDÊNCIA
========================================= */

nextButton.addEventListener(
    "click",
    () => {

        evidenciaAtual++;

        if (
            evidenciaAtual >=
            evidencias.length
        ) {

            finalizarInvestigacao();

            return;
        }

        carregarEvidencia();

    }
);


/* =========================================
   FINAL DA INVESTIGAÇÃO
========================================= */

function finalizarInvestigacao() {

    questions.classList.add("hidden");

    setTimeout(() => {

        caseComplete.classList.remove("hidden");

    }, 800);
}


/* =========================================
   CONTINUAR
========================================= */

continueButton.addEventListener(
    "click",
    () => {

        caseComplete.classList.add("hidden");

        setTimeout(() => {

            pullUp.classList.remove("hidden");

        }, 800);

    }
);


/* =========================================
   INICIAR INVESTIGAÇÃO
========================================= */

startInvestigation.addEventListener(
    "click",
    () => {

        startInvestigation.textContent =
            "CASO INICIADO...";

        startInvestigation.disabled = true;

        setTimeout(() => {

            mostrarPerguntas();

        }, 700);

    }
);


/* =========================================
   INICIAR ABERTURA
========================================= */

function iniciarIntro() {

    criarParticulas();

    setTimeout(() => {

        mostrarMensagem();

        setTimeout(() => {

            esconderMensagem();

        }, TEMPO_MENSAGEM);

    }, TEMPO_INICIAL);
}


/* =========================================
   INICIAR SITE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        iniciarIntro();

    }
);
