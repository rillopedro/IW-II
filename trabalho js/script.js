// Cronômetro
let timer;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
    display.textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Temperatura e cor de fundo
const temperaturaDisplay = document.getElementById('temperatura-display');


        const temp = 30;
        temperaturaDisplay.textContent = `${temp}°C (simulado)`;
        updateBackground(temp);
 
function updateBackground(temp) {
    let hue;

    if (temp <= 0) {
        hue = 240; // Azul
    } else if (temp >= 40) {
        hue = 0; // Vermelho
    } else {
        hue = 240 - (temp / 40) * 240;
    }
    
    document.body.style.backgroundColor = `hsl(${hue}, 70%, 85%)`;
}

fetchTemperature();

// Jogo Pedra, Papel e Tesoura
const jogadas = document.querySelectorAll('.jogada');
const resultadoJogo = document.getElementById('resultado-jogo');
const placarJogador = document.getElementById('placar-jogador');
const placarComputador = document.getElementById('placar-computador');

let pontosJogador = 0;
let pontosComputador = 0;

const opcoes = ['pedra', 'papel', 'tesoura'];

jogadas.forEach(jogada => {
    jogada.addEventListener('click', () => {
        const escolhaJogador = jogada.dataset.jogada;
        const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
        
        const resultado = determinarVencedor(escolhaJogador, escolhaComputador);
        
        mostrarResultado(escolhaJogador, escolhaComputador, resultado);
        atualizarPlacar(resultado);
    });
});

function determinarVencedor(jogador, computador) {
    if (jogador === computador) return 'empate';
    
    if (
        (jogador === 'pedra' && computador === 'tesoura') ||
        (jogador === 'papel' && computador === 'pedra') ||
        (jogador === 'tesoura' && computador === 'papel')
    ) {
        return 'jogador';
    } else {
        return 'computador';
    }
}

function mostrarResultado(jogador, computador, resultado) {
    const emojis = {
        pedra: '✊',
        papel: '✋',
        tesoura: '✌️'
    };
    
    let mensagem;
    
    switch (resultado) {
        case 'jogador':
            mensagem = `Você ganhou! ${emojis[jogador]} vence ${emojis[computador]}`;
            break;
        case 'computador':
            mensagem = `Você perdeu! ${emojis[computador]} vence ${emojis[jogador]}`;
            break;
        default:
            mensagem = `Empate! Ambos escolheram ${emojis[jogador]}`;
    }
    
    resultadoJogo.innerHTML = `
        <p>Você: ${emojis[jogador]}</p>
        <p>Computador: ${emojis[computador]}</p>
        <p><strong>${mensagem}</strong></p>
    `;
}

function atualizarPlacar(resultado) {
    if (resultado === 'jogador') {
        pontosJogador++;
    } else if (resultado === 'computador') {
        pontosComputador++;
    }
    
    placarJogador.textContent = pontosJogador;
    placarComputador.textContent = pontosComputador;
}
function updateTemperature(temp) {
    tempDisplay.textContent = `${temp}°C`};
    
  
   