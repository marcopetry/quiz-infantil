export function sortearQuestoes(qtdQuestoes){
    let indicesPerguntas = [];
    
    while(indicesPerguntas.length < 5){
        let indice = Math.floor(Math.random() * qtdQuestoes.length);
        if(indicesPerguntas.indexOf(indice) === -1){
            indicesPerguntas.push(indice);
        }
    }
    return indicesPerguntas;
}