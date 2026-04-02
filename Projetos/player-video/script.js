const video = document.getElementById('video-principal');
const btnPlay = document.getElementById('btn-play-pause');
const barraProgresso = document.getElementById('barra-progresso');
const tempoTexto = document.getElementById('tempo-atual');
const btnMute = document.getElementById('btn-mute');

btnPlay.addEventListener('click',() => {
    if (video.paused) {
        video.play();
        btnPlay.innerText = 'Pause';
    } else {
        video.pause();
        btnPlay.innerText = 'Play';
    }
});

video.addEventListener('timeupdate', () => {
    console.log("O vídeo está em: " + video.currentTime);
    const progresso = (video.currentTime / video.duration) * 100;
    barraProgresso.value = progresso;

    let min = Math.floor(video.currentTime / 60);
    let seg = Math.floor(video.currentTime % 60);
    tempoTexto.innerText = `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
});

barraProgresso.addEventListener('input', () => {
    const tempo = (barraProgresso.value / 100) * video.duration;
    video.currentTime = tempo;
});

btnMute.addEventListener('click', () => {
    // A propriedade .muted é um booleano (true ou false)
    video.muted = !video.muted; 
    
    // Feedback visual para o usuário
    if (video.muted) {
        btnMute.innerText = "Desmutar";
        btnMute.classList.replace('btn-outline-secondary', 'btn-danger');
    } else {
        btnMute.innerText = "Mudo";
        btnMute.classList.replace('btn-danger', 'btn-outline-secondary');
    }
});

document.addEventListener('keydown', (event) => {
    // Se apertar Espaço, dá Play/Pause
    if (event.code === 'Space') {
        event.preventDefault(); // Impede que a página desça ao apertar espaço
        btnPlay.click(); // Simula o clique no botão que você já criou
    }
    // Se apertar 'M', silencia
    if (event.key.toLowerCase() === 'm') {
        btnMute.click();
    }
});