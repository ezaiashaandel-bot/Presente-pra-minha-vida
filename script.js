/* =========================================
   PRESENTE PRA YUYU
   VERSÃO 1 — ABERTURA
========================================= */


/* =========================================
   CONFIGURAÇÕES
========================================= */

const TEMPO_INICIAL = 10000; // 10 segundos

const TEMPO_MENSAGEM = 5000; // 5 segundos


/* =========================================
   ELEMENTOS
========================================= */

const intro = document.getElementById("intro");

const loveMessage =
    document.getElementById("loveMessage");

const investigation =
    document.getElementById("investigation");

const startInvestigation =
    document.getElementById("startInvestigation");

const particles =
    document.getElementById("particles");


/* =========================================
   CRIAR PARTÍCULAS
========================================= */

function criarParticulas() {

    const quantidade = 35;

    for (let i = 0; i < quantidade; i++) {

        const particle =
            document.createElement("div");

        particle.classList.add("particle");

        /* Posição horizontal aleatória */

        particle.style.left =
            Math.random() * 100 + "%";

        /* Começa em posições diferentes */

        particle.style.animationDelay =
            Math.random() * 10 + "s";

        /* Velocidade */

        particle.style.animationDuration =
            (8 + Math.random() * 10) + "s";

        /* Tamanho */

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

    /*
        Pequeno atraso para garantir que
        a transição de opacity seja executada.
    */

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            loveMessage.classList.add("show");

        });

    });
}


/* =========================================
   ESCONDER MENSAGEM
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

    /*
        Força a animação de entrada.
    */

    requestAnimationFrame(() => {

        investigation.style.opacity = "1";

    });
}


/* =========================================
   INICIAR ABERTURA
========================================= */

function iniciarIntro() {

    criarParticulas();

    /*
        Espera 10 segundos antes
        de mostrar a mensagem.
    */

    setTimeout(() => {

        mostrarMensagem();

        /*
            Depois de 5 segundos,
            começa o desaparecimento.
        */

        setTimeout(() => {

            esconderMensagem();

        }, TEMPO_MENSAGEM);

    }, TEMPO_INICIAL);
}


/* =========================================
   BOTÃO DA INVESTIGAÇÃO
========================================= */

startInvestigation.addEventListener(
    "click",
    () => {

        /*
            POR ENQUANTO:
            apenas mostra uma mensagem.
            
            Depois vamos substituir isso
            pelo primeiro minijogo.
        */

        startInvestigation.textContent =
            "CASO INICIADO...";

        startInvestigation.disabled = true;

        setTimeout(() => {

            startInvestigation.textContent =
                "EM BREVE";

        }, 1500);

    }
);


/* =========================================
   INICIAR
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        iniciarIntro();

    }
);
