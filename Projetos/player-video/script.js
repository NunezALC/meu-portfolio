const video = document.getElementById('video-principal');
const btnPlay = document.getElementById('btn-play-pause');
const barraProgresso = document.getElementById('barra-progresso');
const tempoTexto = document.getElementById('tempo-atual');

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
    const progresso = (video.currentTime / video.durantion) * 100;
    barraProgresso.value = progresso;

    let min = Math.floor(video.currentTime / 60);
    let seg = Math.floor(video.currentTime % 60);
    tempoTexto.innerText = `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
});

barraProgresso.addEventListener('input', () => {
    const tempo = (barraProgresso.value / 100) * video.duration;
    video.currentTime = tempo;
});