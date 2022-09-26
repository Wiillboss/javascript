function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    /* Acima foi decladas 4 variaveis - LET é a declaração, poderia ser usado VAR ambos funcionam-
        Essas variaveis estão conectando uma mudança na pagina HTML
    */

        if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
            res.innerHTML = `Impossível contar`
            /* Acima o IF está sendo feito uma verificão:
             caso dentro dos imput: Início, fim ou passo  não for digitado NADA, será impossível contar */
        }else{
            res.innerHTML = `Contando: <br>` 
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            /* Acida está sendo declara variavais (i,f,p) para receber a conversão das variaveis (ini, fim, passo) do inicio da função*/
            if(p<=0){
                window.alert(`Passo inválido! O passo 1 será iniciado automativamente!`)
                p=1
            //Acima está sendo verificado se o passo digitado é menor ou igual a 0, neste caso não é possível dar inicio ao programa.      
            }
            if(i<f){
              for(let c=i; c<=f; c+=p){
                res.innerHTML += `${c} \u{1F449}`
              }
              /*Acima está sendo feita uma contagem crescente varrida dentro do FOR 
                    caso o a var i (que está recebendo a conversão da var inicio ) 
                    seja menor que var f (que está recebdno a conversão da var fim)*/
              
            }else{
               for(let c=i; c>=f; c-=p ){
                res.innerHTML += `${c} \u{1F449}`
               }
               /*Acima está sendo feita uma contagem regressiva varrida dentro do FOR 
                    caso o resultado do IF seja falso 
                    a var i (que está recebendo a conversão da var inicio ) 
                    seja menor que var f (que está recebdno a conversão da var fim)*/
               
            }
            res.innerHTML += `\u{1F3C1}`        
        }    
}
