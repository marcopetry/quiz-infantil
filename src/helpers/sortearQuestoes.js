export function sortearQuestoes(){
    let indicesPerguntas = [];

    while(indicesPerguntas.length < 5){
        let indice = Math.floor(Math.random() * 15);
        if(indicesPerguntas.indexOf(indice) === -1){
            indicesPerguntas.push(indice);
        }
    }
    return indicesPerguntas;
}