const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarIformacoesGlobais(params) {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = `voce sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${total_pessoas_conectadas} estão conectadas em alguma rede social e passam em media ${dados.tempo_medio} horas conectas.`
    console.log(paragrafo)
    
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

    vizualizarIformacoesGlobais() 