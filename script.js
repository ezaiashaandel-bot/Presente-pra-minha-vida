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


/* =========================================
   EXPERIÊNCIA DA NOSSA HISTÓRIA
========================================= */


/* =========================================
   ELEMENTOS
========================================= */

const storyExperience =
    document.getElementById("storyExperience");

const storyMusic =
    document.getElementById("storyMusic");

const storyBlack =
    document.getElementById("storyBlack");

const storyOpeningText =
    document.getElementById("storyOpeningText");

const storyPhoto =
    document.getElementById("storyPhoto");

const storyPhotoImage =
    document.getElementById("storyPhotoImage");

const storyText =
    document.getElementById("storyText");

const storyCredits =
    document.getElementById("storyCredits");

const secretFile =
    document.getElementById("secretFile");

const weddingPhotos =
    document.getElementById("weddingPhotos");

const weddingPhotoImage =
    document.getElementById("weddingPhotoImage");

const finalLove =
    document.getElementById("finalLove");


/* =========================================
   FOTOS
========================================= */

const fotos = [];

for (let i = 1; i <= 30; i++) {

    fotos.push(
        `imagens/fotos/foto${i}.jpg`
    );

}


/* =========================================
   FOTO 24 É RESERVADA
========================================= */

const fotosNormais =
    fotos.filter(
        foto => !foto.endsWith("foto24.jpg")
    );


/* =========================================
   EMBARALHAR
========================================= */

function embaralharFotos(array) {

    const copia = [...array];

    for (
        let i = copia.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            copia[i],
            copia[j]
        ] = [
            copia[j],
            copia[i]
        ];
    }

    return copia;
}


const fotosEmbaralhadas =
    embaralharFotos(fotosNormais);


/* =========================================
   GRUPOS
========================================= */

const grupo1 =
    fotosEmbaralhadas.slice(0, 4);

const grupo2 =
    fotosEmbaralhadas.slice(4, 8);

const grupo3 =
    fotosEmbaralhadas.slice(8, 19);

const grupo4 =
    fotosEmbaralhadas.slice(19, 25);


/* =========================================
   FOTOS ESPECIAIS
========================================= */

const fotoEspecial1 =
    fotosEmbaralhadas[25];

const fotoEspecial2 =
    fotosEmbaralhadas[26];

const fotoEspecial3 =
    fotosEmbaralhadas[27];


/* =========================================
   CONTROLE
========================================= */

let ultimoGrupo = null;

let ultimaFotoStory = "";

let historiaComecou = false;


/* =========================================
   MOSTRAR FOTO
========================================= */

function mostrarFotoStory(caminho) {

    if (
        ultimaFotoStory === caminho
    ) {
        return;
    }

    ultimaFotoStory = caminho;

    storyPhotoImage.src = caminho;

    storyPhoto.style.opacity = "1";
}


/* =========================================
   SEQUÊNCIA RÁPIDA
========================================= */

function rodarFotosRapidas(
    grupo,
    inicio
) {

    const tempo =
        storyMusic.currentTime;

    const intervalo =
        0.300;

    const tempoDecorrido =
        tempo - inicio;

    let indice =
        Math.floor(
            tempoDecorrido / intervalo
        );

    if (indice < 0) {
        indice = 0;
    }

    if (indice >= grupo.length) {

        indice =
            grupo.length - 1;
    }

    mostrarFotoStory(
        grupo[indice]
    );
}


/* =========================================
   FADE DA FOTO
========================================= */

function fadeFotoStory() {

    storyPhoto.style.transition =
        "opacity 3.5s ease";

    storyPhoto.style.opacity = "0";
}


/* =========================================
   HISTÓRIA
========================================= */

const primeiraParteHistoria =
`Quem diria que nós iríamos conhecer em um jogo,
naquele momento eu nem poderia acreditar que isso estaria por vir,
você sentada no banco daquele jogo escutando música,
e eu olhando pra minha futura namorada sem nem saber,
quem diria que iríamos passar por momentos bons e momentos ruins
até chegar aqui meu amor, sou muito grato por ter entrado no alone aquela madrugada.`;


/* =========================================
   ESCREVER TEXTO
========================================= */

function escreverHistoria(
    elemento,
    texto,
    velocidade = 45
) {

    elemento.innerHTML = "";

    let indice = 0;

    function escrever() {

        if (
            indice >= texto.length
        ) {
            return;
        }

        elemento.innerHTML +=
            texto[indice];

        indice++;

        setTimeout(
            escrever,
            velocidade
        );
    }

    escrever();
}


/* =========================================
   INICIAR EXPERIÊNCIA
========================================= */

function iniciarExperiencia() {

    storyExperience.classList.remove(
        "hidden"
    );

    storyExperience.style.opacity = "1";

    storyMusic.currentTime = 0;

    storyMusic.volume = 1;

    storyBlack.style.opacity = "1";

    storyOpeningText.style.opacity = "0";

    storyPhoto.style.opacity = "0";

    storyText.style.opacity = "0";

    storyCredits.style.opacity = "0";

    secretFile.style.opacity = "0";

    weddingPhotos.style.opacity = "0";

    finalLove.style.opacity = "0";

    ultimaFotoStory = "";

    historiaComecou = false;

    storyMusic.play()
        .then(() => {

            requestAnimationFrame(
                atualizarExperiencia
            );

        })
        .catch(erro => {

            console.error(
                "Erro ao iniciar música:",
                erro
            );

        });
}


/* =========================================
   TIMELINE
========================================= */

function atualizarExperiencia() {

    const tempo =
        storyMusic.currentTime;


    /* =====================================
       00:00 → 07.0
    ====================================== */

    if (
        tempo >= 0 &&
        tempo < 7
    ) {

        storyBlack.style.opacity = "1";

        storyOpeningText.style.opacity =
            "0";

        storyPhoto.style.opacity =
            "0";

        storyText.style.opacity =
            "0";
    }


    /* =====================================
       07.0 → 11.0
    ====================================== */

    else if (
        tempo >= 7 &&
        tempo < 11
    ) {

        storyBlack.style.opacity =
            "1";

        storyOpeningText.style.opacity =
            "1";

        storyOpeningText.innerHTML =
            "feito pra você meu amor!!";
    }


    /* =====================================
       11.0 → 30.0
    ====================================== */

    else if (
        tempo >= 11 &&
        tempo < 30
    ) {

        storyBlack.style.opacity =
            "1";

        storyOpeningText.style.opacity =
            "0";
    }


    /* =====================================
       30.0 → 40.0
    ====================================== */

    else if (
        tempo >= 30 &&
        tempo < 40
    ) {

        storyBlack.style.opacity =
            "0";

        storyText.style.opacity =
            "1";

        storyPhoto.style.opacity =
            "0";

        if (!historiaComecou) {

            historiaComecou = true;

            escreverHistoria(
                storyText,
                primeiraParteHistoria,
                35
            );
        }
    }


    /* =====================================
       40.0 → 46.3
    ====================================== */

    else if (
        tempo >= 40 &&
        tempo < 46.3
    ) {

        storyText.style.opacity =
            "0";

        storyPhoto.style.opacity =
            "1";

        mostrarFotoStory(
            fotoEspecial1
        );
    }


    /* =====================================
       46.3 → 50.3
       SEQUÊNCIA RÁPIDA
    ====================================== */

    else if (
        tempo >= 46.3 &&
        tempo < 50.3
    ) {

        storyText.style.opacity =
            "0";

        rodarFotosRapidas(
            grupo1,
            46.3
        );
    }


    /* =====================================
       50.3 → 54.0
       FOTO ESPECIAL
    ====================================== */

    else if (
        tempo >= 50.3 &&
        tempo < 54
    ) {

        mostrarFotoStory(
            fotoEspecial1
        );
    }


    /* =====================================
       54.0 → 57.0
       SEQUÊNCIA RÁPIDA
    ====================================== */

    else if (
        tempo >= 54 &&
        tempo < 57
    ) {

        rodarFotosRapidas(
            grupo2,
            54
        );
    }


    /* =====================================
       57.0 → 61.7
       FOTO ESPECIAL
    ====================================== */

    else if (
        tempo >= 57 &&
        tempo < 61.7
    ) {

        mostrarFotoStory(
            fotoEspecial2
        );
    }


    /* =====================================
       61.7 → 65.0
       SEQUÊNCIA RÁPIDA
    ====================================== */

    else if (
        tempo >= 61.7 &&
        tempo < 65
    ) {

        rodarFotosRapidas(
            grupo3,
            61.7
        );
    }


    /* =====================================
       65.0 → 69.5
       FOTO ESPECIAL
    ====================================== */

    else if (
        tempo >= 65 &&
        tempo < 69.5
    ) {

        mostrarFotoStory(
            fotoEspecial3
        );
    }


    /* =====================================
       69.5 → 73.0
       ÚLTIMA SEQUÊNCIA
    ====================================== */

    else if (
        tempo >= 69.5 &&
        tempo < 73
    ) {

        const tempoDecorrido =
            tempo - 69.5;

        const intervalo =
            0.300;

        const indice =
            Math.floor(
                tempoDecorrido /
                intervalo
            );

        if (
            indice <
            grupo4.length
        ) {

            mostrarFotoStory(
                grupo4[indice]
            );

        } else {

            /*
             * FOTO 24 É A ÚLTIMA
             */
            mostrarFotoStory(
                "imagens/fotos/foto24.jpg"
            );
        }
    }


    /* =====================================
       73.0 → 76.5
       FOTO 24 SUMINDO
    ====================================== */

    else if (
        tempo >= 73 &&
        tempo < 76.5
    ) {

        mostrarFotoStory(
            "imagens/fotos/foto24.jpg"
        );

        const progresso =
            (tempo - 73) / 3.5;

        storyPhoto.style.opacity =
            String(1 - progresso);
    }


    /* =====================================
       76.5 → 117.0
       HISTÓRIA
    ====================================== */

    else if (
        tempo >= 76.5 &&
        tempo < 117
    ) {

        storyBlack.style.opacity =
            "1";

        storyPhoto.style.opacity =
            "0";

        storyText.style.opacity =
            "1";

        /*
         * A segunda parte da história
         * vamos colocar depois que
         * você me passar o texto.
         */
    }


    /* =====================================
       FINAL DO ÁUDIO
    ====================================== */

    if (
        !storyMusic.paused &&
        !storyMusic.ended
    ) {

        requestAnimationFrame(
            atualizarExperiencia
        );
    }
}


/* =========================================
   PUXAR PARA CIMA
========================================= */

let toqueInicialY = 0;

pullUp.addEventListener(
    "touchstart",
    (evento) => {

        toqueInicialY =
            evento.touches[0].clientY;
    },
    { passive: true }
);


pullUp.addEventListener(
    "touchend",
    (evento) => {

        const toqueFinalY =
            evento.changedTouches[0].clientY;

        const distancia =
            toqueInicialY -
            toqueFinalY;

        if (distancia > 80) {

            pullUp.classList.add(
                "hidden"
            );

            setTimeout(() => {

                iniciarExperiencia();

            }, 800);
        }
    },
    { passive: true }
);


/* =========================================
   CLIQUE PARA TESTAR NO PC
========================================= */

pullUp.addEventListener(
    "click",
    () => {

        pullUp.classList.add(
            "hidden"
        );

        setTimeout(() => {

            iniciarExperiencia();

        }, 800);

    }
);
