function frequencia(texto){
    const frequencia = {};
    //percorer - verificar se ja existe a letra, se sim criar incrementar, se não criar dinamicamente.

    //percorrer
    for(let c = 0; c < texto.length;c++){
        //verificar se existe (se não) criar/
        if (frequencia[texto[c]]) {
            frequencia[texto[c]]++;
        } else {
            frequencia[texto[c]] = 1;
        }

        //vericar se existe (se sim) incrementar.
    }
   
}



let testando = frequencia('arara')


