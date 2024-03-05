AOS.init();

const dataEvento = new Date("Dec 12, 2024 19:00:00");
const timeEvento = dataEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeAtual = agora.getTime();

    const tempoAteEvento = timeEvento - timeAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(tempoAteEvento / diaEmMs);
    const horasAteEvento = Math.floor((tempoAteEvento % diaEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor((tempoAteEvento % horaEmMs) / minutoEmMs);
    const segundosAteEvento = Math.floor((tempoAteEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if (tempoAteEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);