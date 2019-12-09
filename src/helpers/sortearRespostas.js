export function sortearRespostas(listaAlternativas){
    let indiceResposta = [0];
    let alternativas = [];

    while(indiceResposta.length < 4){
        let indice = Math.floor(Math.random() * (8 - 1) + 1);
        if(indiceResposta.indexOf(indice) === -1){
            indiceResposta.push(indice);
        }
    }

    while(alternativas.length < 4) {
        let indicesSorteados = [];
        let indice = Math.floor(Math.random() * 4);
        if(indicesSorteados.indexOf(indice) === -1){
            console.log(indice);
            console.log(indicesSorteados);
            indicesSorteados.push(indice);
            alternativas.push(listaAlternativas[indiceResposta[indice]]);
        }
    }
    console.log(indiceResposta);
    console.log(alternativas);

    return alternativas;
}