/* =========================================
   PRESENTE PRA YUYU
   VERSÃO FINAL
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
   FOTOS DA HISTÓRIA
   SEM EMBARALHAR
========================================= */

const fotoEspecial1 =
    "imagens/foto1.jpg";

const fotoEspecial2 =
    "imagens/foto2.jpg";

const fotoEspecial3 =
    "imagens/foto3.jpg";


/*
 * Fotos rápidas:
 *
 * grupo1 = foto4 até foto12
 * grupo2 = foto13 até foto16
 * grupo3 = foto17 até foto27
 * grupo4 = foto28 até foto30
 *
 * As fotos são repetidas quando
 * o tempo exige mais trocas.
 */

const grupo1 = [
    "imagens/foto4.jpg",
    "imagens/foto5.jpg",
    "imagens/foto6.jpg",
    "imagens/foto7.jpg",
    "imagens/foto8.jpg",
    "imagens/foto9.jpg",
    "imagens/foto10.jpg",
    "imagens/foto11.jpg",
    "imagens/foto12.jpg"
];

const grupo2 = [
    "imagens/foto13.jpg",
    "imagens/foto14.jpg",
    "imagens/foto15.jpg",
    "imagens/foto16.jpg"
];

const grupo3 = [
    "imagens/foto17.jpg",
    "imagens/foto18.jpg",
    "imagens/foto19.jpg",
    "imagens/foto20.jpg",
    "imagens/foto21.jpg",
    "imagens/foto22.jpg",
    "imagens/foto23.jpg",
    "imagens/foto24.jpg",
    "imagens/foto25.jpg",
    "imagens/foto26.jpg",
    "imagens/foto27.jpg"
];

const grupo4 = [
    "imagens/foto28.jpg",
    "imagens/foto29.jpg",
    "imagens/foto30.jpg"
];


/* =========================================
   FOTOS DE CASAMENTO
========================================= */

const casamentoFotos = [
    "imagens/casamento1.jpg",
    "imagens/casamento2.jpg",
    "imagens/casamento3.jpg",
    "imagens/casamento4.jpg"
];


/* =========================================
   CONTROLE
========================================= */

let ultimaFotoStory = "";

let animacaoStoryAtiva = false;


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
}


/* =========================================
   FOTO RÁPIDA
   200 MILISSEGUNDOS
========================================= */

function rodarFotosRapidas(
    grupo,
    inicio,
    fim
) {

    if (
        !grupo ||
        grupo.length === 0
    ) {
        return;
    }

    const tempoAtual =
        storyMusic.currentTime;

    const tempoDecorrido =
        tempoAtual - inicio;

    const intervalo =
        0.200;

    let indice =
        Math.floor(
            tempoDecorrido / intervalo
        );

    /*
     * Repete as fotos em ordem.
     */

    indice =
        indice % grupo.length;

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
   TEXTO DA ABERTURA
========================================= */

const textoAbertura =
"feito pra você meu amor!!";


/* =========================================
   TEXTO FINAL DA HISTÓRIA
========================================= */

const textoFinalHistoria =
`E mesmo depois de tudo que passamos,
a nossa história ainda está apenas começando.

Cada conversa, cada madrugada,
cada momento bom e cada momento difícil
fez a gente chegar até aqui.

E eu espero continuar escrevendo
essa história ao seu lado.

Eu te amo Ana Vitória.`;


/* =========================================
   CRÉDITOS
========================================= */

const textoCreditos =
`Feliz 2 meses amor!

Eu te amo muito meu neném.`;


/* =========================================
   INICIAR EXPERIÊNCIA
========================================= */

function iniciarExperiencia() {

    storyExperience.classList.remove(
        "hidden"
    );

    storyExperience.style.opacity =
        "1";

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

    storyCredits.innerHTML = "";

    secretFile.innerHTML =
        "<span>ARQUIVO SECRETO</span>";

    weddingPhotoImage.src = "";

    ultimaFotoStory = "";

    animacaoStoryAtiva = true;


    /*
     * A música começa IMEDIATAMENTE
     * quando a experiência é aberta.
     */

    storyMusic.play()
        .then(() => {

            atualizarExperiencia();

        })
        .catch(erro => {

            console.error(
                "Erro ao iniciar música:",
                erro
            );

            /*
             * Se o navegador bloquear,
             * tenta novamente no próximo toque.
             */

            const iniciarMusica =
                () => {

                    storyMusic.play();

                };

            document.addEventListener(
                "touchstart",
                iniciarMusica,
                {
                    once: true
                }
            );

            document.addEventListener(
                "click",
                iniciarMusica,
                {
                    once: true
                }
            );

        });
}


/* =========================================
   FADE DE VOLUME
========================================= */

function diminuirVolume(
    inicio,
    fim,
    volumeInicial
) {

    const progresso =
        (storyMusic.currentTime - inicio) /
        (fim - inicio);

    const volume =
        volumeInicial *
        Math.max(
            0,
            1 - progresso
        );

    storyMusic.volume =
        volume;
}


function aumentarVolume(
    inicio,
    fim
) {

    const progresso =
        (storyMusic.currentTime - inicio) /
        (fim - inicio);

    storyMusic.volume =
        Math.min(
            1,
            Math.max(
                0,
                progresso
            )
        );
}


/* =========================================
   TIMELINE COMPLETA
========================================= */

function atualizarExperiencia() {

    if (
        !animacaoStoryAtiva
    ) {
        return;
    }

    if (
        storyMusic.paused
    ) {

        requestAnimationFrame(
            atualizarExperiencia
        );

        return;
    }

    const tempo =
        storyMusic.currentTime;


    /* =====================================
       00.0 → 07.0
       TELA PRETA
    ====================================== */

    if (
        tempo < 7.0
    ) {

        storyBlack.style.opacity =
            "1";

        storyOpeningText.style.opacity =
            "0";

        storyPhoto.style.opacity =
            "0";

        storyText.style.opacity =
            "0";

        storyCredits.style.opacity =
            "0";

        secretFile.style.opacity =
            "0";

        weddingPhotos.style.opacity =
            "0";

        finalLove.style.opacity =
            "0";
    }


    /* =====================================
       07.0 → 11.0
       TEXTO DE ABERTURA
    ====================================== */

    else if (
        tempo >= 7.0 &&
        tempo < 11.0
    ) {

        storyBlack.style.opacity =
            "1";

        storyOpeningText.style.opacity =
            "1";

        storyPhoto.style.opacity =
            "0";

        storyText.style.opacity =
            "0";

        if (
            storyOpeningText.innerHTML === ""
        ) {

            escreverHistoria(
                storyOpeningText,
                textoAbertura,
                80
            );
        }

    }


    /* =====================================
       11.0 → 30.0
       SUMINDO / PRETO
    ====================================== */

    else if (
        tempo >= 11.0 &&
        tempo < 30.0
    ) {

        storyBlack.style.opacity =
            "1";

        storyOpeningText.style.opacity =
            "0";

        storyPhoto.style.opacity =
            "0";

        storyText.style.opacity =
            "0";
    }


    /* =====================================
       30.0 → 40.0
       PRIMEIRA PARTE DA HISTÓRIA
    ====================================== */

    else if (
        tempo >= 30.0 &&
        tempo < 40.0
    ) {

        storyBlack.style.opacity =
            "1";

        storyOpeningText.style.opacity =
            "0";

        storyPhoto.style.opacity =
            "0";

        storyText.style.opacity =
            "1";

        if (
            storyText.innerHTML === ""
        ) {

            escreverHistoria(
                storyText,
                primeiraParteHistoria,
                28
            );
        }
    }


    /* =====================================
       40.0 → 46.3
       PRIMEIRA FOTO
       FICA PARADA
    ====================================== */

    else if (
        tempo >= 40.0 &&
        tempo < 46.3
    ) {

        storyBlack.style.opacity =
            "0";

        storyOpeningText.style.opacity =
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
       46.3 → 50.3
       9 FOTOS — 200ms
    ====================================== */

    else if (
        tempo >= 46.3 &&
        tempo < 50.3
    ) {

        storyPhoto.style.opacity =
            "1";

        rodarFotosRapidas(
            grupo1,
            46.3,
            50.3
        );
    }


    /* =====================================
       50.3 → 54.0
       FOTO ESPECIAL
    ====================================== */

    else if (
        tempo >= 50.3 &&
        tempo < 54.0
    ) {

        storyPhoto.style.opacity =
            "1";

        mostrarFotoStory(
            fotoEspecial2
        );
    }


    /* =====================================
       54.0 → 57.0
       4 FOTOS — 200ms
    ====================================== */

    else if (
        tempo >= 54.0 &&
        tempo < 57.0
    ) {

        storyPhoto.style.opacity =
            "1";

        rodarFotosRapidas(
            grupo2,
            54.0,
            57.0
        );
    }


    /* =====================================
       57.0 → 61.7
       FOTO ESPECIAL
    ====================================== */

    else if (
        tempo >= 57.0 &&
        tempo < 61.7
    ) {

        storyPhoto.style.opacity =
            "1";

        mostrarFotoStory(
            fotoEspecial3
        );
    }


    /* =====================================
       61.7 → 65.0
       11 FOTOS — 200ms
    ====================================== */

    else if (
        tempo >= 61.7 &&
        tempo < 65.0
    ) {

        storyPhoto.style.opacity =
            "1";

        rodarFotosRapidas(
            grupo3,
            61.7,
            65.0
        );
    }


    /* =====================================
       65.0 → 69.5
       OUTRA FOTO ESPECIAL
    ====================================== */

    else if (
        tempo >= 65.0 &&
        tempo < 69.5
    ) {

        storyPhoto.style.opacity =
            "1";

        mostrarFotoStory(
            "imagens/foto28.jpg"
        );
    }


    /* =====================================
       69.5 → 73.0
       ÚLTIMA PARTE DAS FOTOS
    ====================================== */

    else if (
        tempo >= 69.5 &&
        tempo < 73.0
    ) {

        storyPhoto.style.opacity =
            "1";

        rodarFotosRapidas(
            grupo4,
            69.5,
            73.0
        );
    }


    /* =====================================
       73.0 → 76.5
       ÚLTIMA FOTO
       SUMINDO
    ====================================== */

    else if (
        tempo >= 73.0 &&
        tempo < 76.5
    ) {

        mostrarFotoStory(
            "imagens/foto30.jpg"
        );

        const progresso =
            (tempo - 73.0) /
            3.5;

        storyPhoto.style.opacity =
            String(
                Math.max(
                    0,
                    1 - progresso
                )
            );
    }


    /* =====================================
       76.5 → 77.0
       TELA PRETA
    ====================================== */

    else if (
        tempo >= 76.5 &&
        tempo < 77.0
    ) {

        storyPhoto.style.opacity =
            "0";

        storyBlack.style.opacity =
            "1";

        storyText.style.opacity =
            "0";
    }


    /* =====================================
       77.0 → 115.0
       CONTINUAÇÃO DA HISTÓRIA
    ====================================== */

    else if (
        tempo >= 77.0 &&
        tempo < 115.0
    ) {

        storyPhoto.style.opacity =
            "0";

        storyBlack.style.opacity =
            "1";

        storyText.style.opacity =
            "1";

        if (
            storyText.innerHTML === "" ||
            storyText.innerHTML === primeiraParteHistoria
        ) {

            escreverHistoria(
                storyText,
                textoFinalHistoria,
                35
            );
        }
    }


    /* =====================================
       115.0 → 153.0
       MÚSICA ABAIXANDO
       TEXTO CONTINUA
    ====================================== */

    else if (
        tempo >= 115.0 &&
        tempo < 153.0
    ) {

        storyBlack.style.opacity =
            "1";

        storyPhoto.style.opacity =
            "0";

        storyText.style.opacity =
            "1";

        diminuirVolume(
            115.0,
            125.0,
            1
        );
    }


    /* =====================================
       153.0 → 175.0
       CRÉDITOS
       MÚSICA SUBINDO
    ====================================== */

    else if (
        tempo >= 153.0 &&
        tempo < 175.0
    ) {

        storyBlack.style.opacity =
            "1";

        storyText.style.opacity =
            "0";

        storyCredits.style.opacity =
            "1";

        aumentarVolume(
            153.0,
            163.0
        );

        if (
            storyCredits.innerHTML === ""
        ) {

            escreverHistoria(
                storyCredits,
                textoCreditos,
                65
            );
        }
    }


    /* =====================================
       175.0 → 180.0
       FINAL DOS CRÉDITOS
    ====================================== */

    else if (
        tempo >= 175.0 &&
        tempo < 180.0
    ) {

        storyCredits.style.opacity =
            String(
                Math.max(
                    0,
                    1 -
                    ((tempo - 175.0) / 5.0)
                )
            );

        storyBlack.style.opacity =
            "1";
    }


    /* =====================================
       180.0 → 183.5
       ARQUIVO SECRETO
    ====================================== */

    else if (
        tempo >= 180.0 &&
        tempo < 183.5
    ) {

        storyBlack.style.opacity =
            "1";

        storyCredits.style.opacity =
            "0";

        secretFile.style.opacity =
            String(
                Math.min(
                    1,
                    (tempo - 180.0) / 2.5
                )
            );
    }


    /* =====================================
       183.5
       CORTE BRUTAL
       CASAMENTO
    ====================================== */

    else if (
        tempo >= 183.5 &&
        tempo < 187.4
    ) {

        secretFile.style.opacity =
            "0";

        storyBlack.style.opacity =
            "0";

        weddingPhotos.style.opacity =
            "1";

        weddingPhotoImage.src =
            casamentoFotos[0];
    }


    /* =====================================
       187.4 → 191.0
       FOTO CASAMENTO 2
    ====================================== */

    else if (
        tempo >= 187.4 &&
        tempo < 191.0
    ) {

        weddingPhotos.style.opacity =
            "1";

        weddingPhotoImage.src =
            casamentoFotos[1];
    }


    /* =====================================
       191.0 → 195.0
       FOTO CASAMENTO 3
    ====================================== */

    else if (
        tempo >= 191.0 &&
        tempo < 195.0
    ) {

        weddingPhotos.style.opacity =
            "1";

        weddingPhotoImage.src =
            casamentoFotos[2];
    }


    /* =====================================
       195.0 → 199.0
       FOTO CASAMENTO 4
    ====================================== */

    else if (
        tempo >= 195.0 &&
        tempo < 199.0
    ) {

        weddingPhotos.style.opacity =
            "1";

        weddingPhotoImage.src =
            casamentoFotos[3];
    }


    /* =====================================
       199.0 → 205.0
       FOTO ESPECIAL DO CASAMENTO
    ====================================== */

    else if (
        tempo >= 199.0 &&
        tempo < 205.0
    ) {

        weddingPhotos.style.opacity =
            "1";

        weddingPhotoImage.src =
            casamentoFotos[3];
    }


    /* =====================================
       205.0 → 209.6
       PRETO + EU TE AMO
    ====================================== */

    else if (
        tempo >= 205.0
    ) {

        weddingPhotos.style.opacity =
            String(
                Math.max(
                    0,
                    1 -
                    ((tempo - 205.0) / 2.5)
                )
            );

        storyBlack.style.opacity =
            "1";

        finalLove.style.opacity =
            String(
                Math.min(
                    1,
                    (tempo - 205.0) / 2.5
                )
            );

        finalLove.innerHTML =
            "Eu te amo Ana Vitória";
    }


    /* =====================================
       FIM
    ====================================== */

    if (
        tempo >= 209.6 ||
        storyMusic.ended
    ) {

        animacaoStoryAtiva = false;

        storyMusic.volume = 0;

        return;
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
