import React, { useState, useEffect } from 'react';
import Perguntas from '../pages/Perguntas';
import { sortearQuestoes } from '../helpers/sortearQuestoes';
import { sortearRespostas } from '../helpers/sortearRespostas';

const indicesQuestoes = sortearQuestoes();
export default function ControllersPerguntas({ navigation }){
    const [questoes, setQuestoes] = useState(navigation.getParam('questoes')), 
        [contador, setContador] = useState(0), 
        [alternativas, setAlternativas] = useState([]);


    useEffect(() => {   
        setAlternativas(sortearRespostas(questoes.questoes[indicesQuestoes[contador]].alternativas));
    }, [contador]);

    return (

        <Perguntas 
            enunciado={questoes.questoes[indicesQuestoes[contador]].enunciado}
            alternativa={alternativas}
            correta={questoes.questoes[indicesQuestoes[contador]].alternativas[0]}
            passarPergunta={() => setContador(contador + 1)}
            />
    );
}

