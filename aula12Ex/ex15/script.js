function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var forAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
/*  
        O inicio deste IF está fazendo uma validação se o tamanho (lengt) da VAR: forAno -linha 4- (que é a variável dentro do formulário  -no HTML- para calcular o ano) for igual a 0(zero) ou maior que a VAR anoAtual -linha 3- (que está expondo o ano atual completo), mostre o ERRO.
*/
    if(forAno.value.length == 0 || Number(forAno.value) > anoAtual){
        res.style.textAlign = 'Center'
        res.innerHTML = '[ERRO] Verifique os dados e tente novamente!'  
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(forAno.value)
        var genero = ''
/*
            A var: img - linha 21 - foi criada para adicionar TAG: img, em seguida está sendo inserido na TAG um ID com o nome FOTO.
            Em outras palavras, está sendo criado INTERATIVAMENTE no JS uma TAG img com ID de nome FOTO, 
        é a como se estivesse criando a TAG <img ID='foto'> no HTML.
*/
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

/*
        O IF a baixo está verificando se a VAR: fsex (que está fazendo a ligação com o RADIO -radsex- no HTML) na posição zero [0] e checada
    (CHECKED), adicione dentro da VAR genero: HOMEM, mas se a VAR: fsex estiver na posição um [1] e checada (CHECKED), 
    adicione dentro da VAR genero: MULHER.
        Em seguida abaixo a VAR res está recendo uma formatação de alinhamento central e na linha abaixo recebendo uma mudança de texto com as
    variaveis.
*/
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'hb.png')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'hj.png')
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'ha.png')
            }else{
                // Idoso
                img.setAttribute('src', 'hi.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'mb.png')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'mj.png')
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'ma.png')
            }else{
                // Idoso
                img.setAttribute('src', 'mi.png')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)    
    }
}