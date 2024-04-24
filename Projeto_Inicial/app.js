 alert('Boas vindas ao jogo do numero secreto!');
let mumeroSecreto = parseInt(Math.random() *10 +1);
console.log(numeroSecreto);
let chute = prompt('Escolha um numero de 1 a 10');
 let tentativas = 1;

 //enquanto o chute não for igual ao numero secreto
 while(chute != numeroSecreto){
    chute = prompt('Escolha um numero de 1 a 10');
    //se o chute for igual ao numero secreto
    if(chute == NumeroSecreto){
    break;
} else {
    if (chute > numeroSecreto){
        alert ('o numero secreto é menor que $ {chute}')
    }else{
        alert('o numero secreto é maior que ${chute}')
    }
    //tentativas=tentativas + 1 
    Tentativas++
}

    alert('isso ai vc acertou o numero secreto' $
    {numeroSecreto})
}
let palavraTentativa = tentativa > 1? 
'tentativas' : 'tentativas'
 alert('isso ai voce descobriu o numero secreto')
