/* =========================================
   PRESENTE PRA YUYU
   VERSÃO 3
========================================= */


/* =========================================
   CONFIGURAÇÕES
========================================= */

const TEMPO_INICIAL = 10000;

const TEMPO_MENSAGEM = 8000;


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

    hintButton.textContent =
        "VER DICA";

    setTimeout(() => {

        answerInput.focus();

    }, 100);
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
   ENTER
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
   CAMINHOS DAS FOTOS
========================================= */

const fotos = [];

for (let i = 1; i <= 30; i++) {

    fotos.push(
        `imagens/foto${i}.jpg`
    );

}


/* =========================================
   FOTO 24 RESERVADA
========================================= */

const fotosNormais =
    fotos.filter(
        foto => !foto.endsWith("foto24.jpg")
    );


/* =========================================
   EMBARALHAR FOTOS
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
   CONTROLE DA EXPERIÊNCIA
========================================= */

let ultimaFotoStory = "";

let historiaComecou = false;

let primeiraHistoriaEscrita = false;


/* =========================================
   MOSTRAR FOTO
========================================= */

function mostrarFotoStory(caminho) {

    if (!caminho) {
        return;
    }

    if (
        ultimaFotoStory === caminho
    ) {
        return;
    }

    ultimaFotoStory = caminho;

    storyPhotoImage.src = caminho;

    storyPhotoImage.onerror = () => {

        console.error(
            "Não foi possível carregar:",
            caminho
        );

    };

    storyPhoto.style.opacity = "1";
}


/* =========================================
   FOTOS RÁPIDAS
========================================= */

function rodarFotosRapidas(
    grupo,
    inicio
) {

    if (!grupo || grupo.length === 0) {
        return;
    }

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
        indice = grupo.length - 1;
    }

    mostrarFotoStory(
        grupo[indice]
    );
}


/* =========================================
   ESCREVER TEXTO
========================================= */

function escreverHistoria(
    elemento,
    texto,
    velocidade = 35
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
   PRIMEIRA PARTE DA HISTÓRIA
========================================= */

const primeiraParteHistoria =
`Quem diria que nós iríamos conhecer em um jogo,
naquele momento eu nem poderia acreditar que isso estaria por vir,
você sentada no banco daquele jogo escutando música,
e eu olhando pra minha futura namorada sem nem saber,
quem diria que iríamos passar por momentos bons e momentos ruins
até chegar aqui meu amor, sou muito grato por ter entrado no alone aquela madrugada.`;


/* =========================================
   TEXTO DE ABERTURA
========================================= */

const textoAbertura =
"feito pra você meu amor!!";


/* =========================================
   INICIAR EXPERIÊNCIA
========================================= */

function iniciarExperiencia() {

    storyExperience.classList.remove(
        "hidden"
    );

    storyExperience.style.opacity = "1";

    storyMusic.pause();

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

    storyOpeningText.innerHTML = "";

    storyText.innerHTML = "";

    ultimaFotoStory = "";

    historiaComecou = false;

    primeiraHistoriaEscrita = false;


    /*
     * A experiência começa no silêncio.
     * O texto aparece primeiro.
     */

    setTimeout(() => {

        escreverHistoria(
            storyOpeningText,
            textoAbertura,
            80
        );

        storyOpeningText.style.opacity =
            "1";

    }, 800);


    /*
     * Depois de alguns segundos,
     * a primeira história começa.
     */

    setTimeout(() => {

        storyOpeningText.style.opacity =
            "0";

        storyBlack.style.opacity =
            "1";

        storyText.style.opacity =
            "1";

        historiaComecou = true;

        escreverHistoria(
            storyText,
            primeiraParteHistoria,
            35
        );

    }, 6500);


    /*
     * A música começa 3 segundos
     * depois da história.
     */

    setTimeout(() => {

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

    }, 9500);
}


/* =========================================
   TIMELINE DA MÚSICA
========================================= */

function atualizarExperiencia() {

    if (
        storyMusic.paused ||
        storyMusic.ended
    ) {
        return;
    }

    const tempo =
        storyMusic.currentTime;


    /* =====================================
       00:00 → 05.0
       Música começa com história
    ====================================== */

    if (
        tempo >= 0 &&
        tempo < 5
    ) {

        storyBlack.style.opacity =
            "1";

        storyOpeningText.style.opacity =
            "0";

        storyPhoto.style.opacity =
            "0";

        storyText.style.opacity =
            "1";
    }


    /* =====================================
       05.0 → 12.0
       HISTÓRIA
    ====================================== */

    else if (
        tempo >= 5 &&
        tempo < 12
    ) {

        storyBlack.style.opacity =
            "1";

        storyOpeningText.style.opacity =
            "0";

        storyPhoto.style.opacity =
            "0";

        storyText.style.opacity =
            "1";
    }


    /* =====================================
       12.0 → 16.0
       PRIMEIRA FOTO
    ====================================== */

    else if (
        tempo >= 12 &&
        tempo < 16
    ) {

        storyBlack.style.opacity =
            "0";

        storyText.style.opacity =
            "0";

        storyPhoto.style.opacity =
            "1";

        mostrarFotoStory(
            fotoEspecial1
        );
    }


    /* =====================================
       16.0 → 20.0
       SEQUÊNCIA 1
    ====================================== */

    else if (
        tempo >= 16 &&
        tempo < 20
    ) {

        storyBlack.style.opacity =
            "0";

        storyText.style.opacity =
            "0";

        storyPhoto.style.opacity =
            "1";

        rodarFotosRapidas(
            grupo1,
            16
        );
    }


    /* =====================================
       20.0 → 24.0
       FOTO ESPECIAL
    ====================================== */

    else if (
        tempo >= 20 &&
        tempo < 24
    ) {

        mostrarFotoStory(
            fotoEspecial1
        );
    }


    /* =====================================
       24.0 → 28.0
       SEQUÊNCIA 2
    ====================================== */

    else if (
        tempo >= 24 &&
        tempo < 28
    ) {

        rodarFotosRapidas(
            grupo2,
            24
        );
    }


    /* =====================================
       28.0 → 33.0
       FOTO ESPECIAL 2
    ====================================== */

    else if (
        tempo >= 28 &&
        tempo < 33
    ) {

        mostrarFotoStory(
            fotoEspecial2
        );
    }


    /* =====================================
       33.0 → 36.3
       SEQUÊNCIA 3
    ====================================== */

    else if (
        tempo >= 33 &&
        tempo < 36.3
    ) {

        rodarFotosRapidas(
            grupo3,
            33
        );
    }


    /* =====================================
       36.3 → 41.0
       FOTO ESPECIAL 3
    ====================================== */

    else if (
        tempo >= 36.3 &&
        tempo < 41
    ) {

        mostrarFotoStory(
            fotoEspecial3
        );
    }


    /* =====================================
       41.0 → 44.5
       ÚLTIMA SEQUÊNCIA
    ====================================== */

    else if (
        tempo >= 41 &&
        tempo < 44.5
    ) {

        const tempoDecorrido =
            tempo - 41;

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

            mostrarFotoStory(
                "imagens/foto24.jpg"
            );
        }
    }


    /* =====================================
       44.5 → 48.0
       FOTO 24
    ====================================== */

    else if (
        tempo >= 44.5 &&
        tempo < 48
    ) {

        mostrarFotoStory(
            "imagens/foto24.jpg"
        );

        const progresso =
            (tempo - 44.5) / 3.5;

        storyPhoto.style.opacity =
            String(1 - progresso);
    }


    /* =====================================
       48.0 EM DIANTE
       VOLTA PARA O PRETO
    ====================================== */

    else if (
        tempo >= 48
    ) {

        storyPhoto.style.opacity =
            "0";

        storyBlack.style.opacity =
            "1";

        storyText.style.opacity =
            "1";
    }


    requestAnimationFrame(
        atualizarExperiencia
    );
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
    {
        passive: true
    }
);


pullUp.addEventListener(
    "touchend",
    (evento) => {

        const toqueFinalY =
            evento.changedTouches[0].clientY;

        const distancia =
            toqueInicialY -
            toqueFinalY;

        if (
            distancia > 80
        ) {

            pullUp.classList.add(
                "hidden"
            );

            setTimeout(() => {

                iniciarExperiencia();

            }, 800);
        }

    },
    {
        passive: true
    }
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
