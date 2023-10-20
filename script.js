function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = "Seja bem-vindo(a): " + nome_variavel;
    }
    else{
        alert("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }
}

/*Chamei uma variavel*/
var menu = document.querySelector('nav');

/*Chamei uma variavel*/
var menuIcon = document.querySelector('.menu-icon');

/*Chamei uma variavel*/
var closeIcon = document.querySelector('.close-icon');

/*Aqui e para qaundo a pessoa clicar na variavel menuIcon ele ativar o menu*/
menuIcon.addEventListener('click',()=>{
    menu.classList.add('active')
});

/*Aqui e para qaundo a pessoa clicar na variavel closeIcon ele desativar o menu*/
closeIcon.addEventListener('click',()=>{
    menu.classList.remove('active')
});

function funcao_resposta(){

    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');
    var resp5 = document.querySelector('input[name="quest_5"]:checked');
    var resp6 = document.querySelector('input[name="quest_6"]:checked');
    var resp7 = document.querySelector('input[name="quest_7"]:checked');
    var resp8 = document.querySelector('input[name="quest_8"]:checked');
    var resp9 = document.querySelector('input[name="quest_9"]:checked');
    var resp10 = document.querySelector('input[name="quest_10"]:checked');
    var contador = 0;
    
    if(resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8 && resp9 && resp10){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "Errada, pois o valor do discriminante (Δ) de uma equação de segundo grau é calculado pela fórmula Δ = b² - 4ac."
        }

        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada, a fórmula correta é x = (-b ± √Δ) / (2a), onde Δ é o discriminante da equação. Essa opção não corresponde à fórmula correta."
        }

        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada, porque quando o discriminante é igual a zero, a equação possui apenas uma raiz real."
        }

        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada, pois quando o discriminante é menor que zero, a equação não possui raízes reais."
        }

        if(resp5.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada. Quando o discriminante é maior que zero, a equação possui duas raízes reais."
        }

        if(resp6.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "Errada, pois o coeficiente a é o termo que multiplica a variável de maior grau na equação de segundo grau e é responsável pela inclinação da curva. Os coeficientes b, c e d têm outras funções na equação."
        }

        if(resp7.value == "correta"){
            document.getElementById("resp_correta_7").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_7").innerHTML = "Errada, porque quando o coeficiente a é igual a zero, a equação deixa de ser uma equação de segundo grau."
        }

        if(resp8.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Errada, uma equação de segundo grau pode ter no máximo duas raízes reais, não podendo ter 0 raízes reais ou infinitas raízes reais."
        }

        if(resp9.value == "correta"){
            document.getElementById("resp_correta_9").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "Errada, porque o nome dado às raízes iguais em uma equação de segundo grau é raízes coincidentes ou raiz dupla. As raízes distintas referem-se a raízes diferentes, as raízes complexas envolvem números complexos e as raízes imaginárias envolvem números imaginários."
        }

        if(resp10.value == "correta"){
            document.getElementById("resp_correta_10").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_10").innerHTML = "Errada, o nome dado às raízes diferentes em uma equação de segundo grau é raízes distintas"
        }

        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
    }
    else{
        alert("Não deixe questões em branco!")
    }

}

