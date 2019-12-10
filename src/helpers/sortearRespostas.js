export function sortearRespostas(listaAlternativas){
    let indiceResposta = [0];
    let alternativas = [];

    while(indiceResposta.length < 4){
        let indice = Math.floor(Math.random() * (8 - 1) + 1);
        if(indiceResposta.indexOf(indice) === -1){
            indiceResposta.push(indice);
        }
    }

    let indicesSorteados = [];
    while(alternativas.length < 4) {
        let indice = Math.floor(Math.random() * 4);
        if(indicesSorteados.indexOf(indice) === -1){
            indicesSorteados.push(indice);
            alternativas.push(listaAlternativas[indiceResposta[indice]]);
        }
    }

    return alternativas;
}