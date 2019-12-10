import React, { useState, useEffect } from 'react';
import Perguntas from '../pages/Perguntas';
import { sortearQuestoes } from '../helpers/sortearQuestoes';
import { sortearRespostas } from '../helpers/sortearRespostas';
import { Text } from 'react-native';
import Scores from '../pages/Scores';

const indicesQuestoes = sortearQuestoes();
export default function ControllersPerguntas({ navigation }) {
    const [questoes, setQuestoes] = useState(navigation.getParam('questoes')),
        [contador, setContador] = useState(0),
        [alternativas, setAlternativas] = useState([]),
        [totalRespostasCorretas, setTotalRespostasCorretas] = useState(0),
        [placar, setPlacar] = useState(navigation.getParam('placar'));

    console.log(placar);

    useEffect(() => {
        if (contador < 5)
            setAlternativas(sortearRespostas(questoes.questoes[indicesQuestoes[contador]].alternativas));
    }, [contador]);

    if (contador === 5) {
        global.portugues +=totalRespostasCorretas;
        return (
            <Scores navigation={navigation}/>
        );
    }

    return (

        <Perguntas
            enunciado={questoes.questoes[indicesQuestoes[contador]].enunciado}
            alternativa={alternativas}
            correta={questoes.questoes[indicesQuestoes[contador]].alternativas[0]}
            passarPergunta={() => setContador(contador + 1)}
            adicionarPontoRespostaCorreta={() => setTotalRespostasCorretas(totalRespostasCorretas + 1)}
        />
    );
}

