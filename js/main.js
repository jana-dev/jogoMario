const mario = document.querySelector(".mario"); //selecionar a imagem do mario
const pipe = document.querySelector(".pipe"); // selecionar a imagem do pipe
const clouds = document.querySelector(".clouds");

const jump = () =>{ //criando a função jump
    mario.classList.add("jump"); //adiciona a classe do css jump na imagem do mario

    setTimeout(()=>{ //função anonima para remover a classe depois do tempo da animação
        mario.classList.remove("jump");
    }, 500);
}


const loop = setInterval(()=>{ //criar um loop de tempo a cada 10 milisegundo

    const pipePosition = pipe.offsetLeft; // variavel que acessa o distancia do deslocamento esquerda do pipe
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); //pega o estilo computado no css do arquivo desejado, nesse caso o css bottom do mario, o replace é para tirar o px pois ele retorna uma string e o + na frente converte para numero
    console.log(marioPosition);
    console.log(pipePosition);

    if(pipePosition <=120 &&  pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px` //ele pega a posição exata de quando o pipe e mario se encostam

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px` 



        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';  

        clearInterval(loop);
   }

}, 10);

document.addEventListener("keydown", jump); //criando o evento de qualquer tecla pressionada para ativara o jump