

/*
numerodaquestao
titulo

questaoa
questaob
questaoc
questaod
questaoe
*/

var questaoemqueesta=1;
questaoemqueesta=parseInt(questaoemqueesta);

var questaoescolhida = document.getElementById("questao").value;

var quantasa=0;
var quantasb=0;
var quantasc=0;
var quantasd=0;
var quantase=0;

quantasa=parseInt(quantasa);
quantasb=parseInt(quantasb);
quantasc=parseInt(quantasc);
quantasd=parseInt(quantasd);
quantase=parseInt(quantase);

var numerodaquestao = document.getElementById("numerodaquestao");
var titulo = document.getElementById("titulo");
var questaoa = document.getElementById("questaoa");
var questaob = document.getElementById("questaob");
var questaoc = document.getElementById("questaoc");
var questaod = document.getElementById("questaod");
var questaoe = document.getElementById("questaoe");

//const questao=document.getElementById("questao");

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


function Limpar(){
    numerodaquestao.innerHTML=("");

    numerodaquestao.innerHTML=("");
    titulo.innerHTML=("");
    questaoa.innerHTML=("");
    questaob.innerHTML=("");
    questaoc.innerHTML=("");
    questaod.innerHTML=("");
    questaoe.innerHTML=("");

}

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function ConferirOpcao(){

    questaoescolhida = document.getElementById("questao").value;

    if(questaoescolhida=="a"){
        quantasa++;
    }
    if(questaoescolhida=="b"){
        quantasb++;
    }
    if(questaoescolhida=="c"){
        quantasc++;
    }
    if(questaoescolhida=="d"){
        quantasd++;
    }
    if(questaoescolhida=="e"){
        quantase++;
    }
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


function GuardarPontos(){
    console.log(questaoemqueesta);

    questaoemqueesta++;

    if(questaoemqueesta<11){
        ConferirOpcao();
        Limpar();
        if(questaoemqueesta==1){
            numerodaquestao.innerHTML=("Questão 1:");

            titulo.innerHTML=("No seu tempo livre, qual atividade você prefere?");

            questaoa.innerHTML=("a) Resolver problemas ou quebra-cabeças (ex.: jogos de lógica, sudoku)");
            questaob.innerHTML=("b) Criar algo novo (ex.: desenhar, escrever, cozinhar)");
            questaoc.innerHTML=("c) Ajudar outras pessoas (ex.: ouvir amigos, voluntariar)");
            questaod.innerHTML=("d) Explorar a natureza ou aprender sobre o meio ambiente");
            questaoe.innerHTML=("e) Organizar eventos, liderar grupos ou planejar atividades");

            console.log("A: " + quantasa);
            console.log("B: " + quantasb);
            console.log("C: " + quantasc);
            console.log("D: " + quantasd);
            console.log("E: " + quantase);
        }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        if(questaoemqueesta==2){
            numerodaquestao.innerHTML=("Questão 2:");

            titulo.innerHTML=("Qual tipo de projeto escolar você mais gosta?");

            questaoa.innerHTML=("a) Pesquisas científicas ou experimentos");
            questaob.innerHTML=("b) Apresentações criativas (ex.: teatro, vídeos, artes)");
            questaoc.innerHTML=("c) Trabalhos em grupo que envolvem ajudar os outros");
            questaod.innerHTML=("d) Projetos sobre história, cultura ou sociedade");
            questaoe.innerHTML=("e) Planejamento de eventos ou feiras escolares");

            console.log("A: " + quantasa);
            console.log("B: " + quantasb);
            console.log("C: " + quantasc);
            console.log("D: " + quantasd);
            console.log("E: " + quantase);
        }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        if(questaoemqueesta==3){
            numerodaquestao.innerHTML=("Questão 3:");

            titulo.innerHTML=("Se pudesse escolher uma matéria para estudar mais profundamente, qual seria?");

            questaoa.innerHTML=("a) Matemática ou Física");
            questaob.innerHTML=("b) Artes ou Literatura");
            questaoc.innerHTML=("c) Psicologia ou Sociologia");
            questaod.innerHTML=("d) Biologia ou Geografia");
            questaoe.innerHTML=("e) Administração ou Economia");

            console.log("A: " + quantasa);
            console.log("B: " + quantasb);
            console.log("C: " + quantasc);
            console.log("D: " + quantasd);
            console.log("E: " + quantase);
        }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
 
        if(questaoemqueesta==4){
            numerodaquestao.innerHTML=("Questão 4:");

            titulo.innerHTML=("Qual dessas atividades você acha mais interessante?");

            questaoa.innerHTML=("a) Programar ou construir algo técnico (ex.: robôs, sites)");
            questaob.innerHTML=("b) Escrever histórias, poesias ou criar campanhas publicitárias");
            questaoc.innerHTML=("c) Trabalhar com saúde ou bem-estar (ex.: primeiros socorros, terapia)");
            questaod.innerHTML=("d) Estudar o comportamento animal ou mudanças climáticas");
            questaoe.innerHTML=("e) Gerenciar projetos ou negociar acordos");

            console.log("A: " + quantasa);
            console.log("B: " + quantasb);
            console.log("C: " + quantasc);
            console.log("D: " + quantasd);
            console.log("E: " + quantase);
        }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        if(questaoemqueesta==5){
            numerodaquestao.innerHTML=("Questão 5:");

            titulo.innerHTML=("Qual dessas habilidades você considera mais forte em você?");

            questaoa.innerHTML=("a) Resolver problemas lógicos ou matemáticos");
            questaob.innerHTML=("b) Expressar ideias de forma criativa (escrita, desenho, fala)");
            questaoc.innerHTML=("c) Entender e apoiar as emoções das pessoas");
            questaod.innerHTML=("d) Observar detalhes e analisar informações");
            questaoe.innerHTML=("e) Organizar tarefas ou liderar equipes");

            console.log("A: " + quantasa);
            console.log("B: " + quantasb);
            console.log("C: " + quantasc);
            console.log("D: " + quantasd);
            console.log("E: " + quantase);
        }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        if(questaoemqueesta==6){
            numerodaquestao.innerHTML=("Questão 6:");

            titulo.innerHTML=("Em um trabalho em grupo, qual papel você geralmente assume?");

            questaoa.innerHTML=("a) O que analisa os dados e propõe soluções");
            questaob.innerHTML=("b) O que traz ideias criativas ou faz o design");
            questaoc.innerHTML=("c) O que motiva o grupo e mantém todos unidos");
            questaod.innerHTML=("d) O que pesquisa e organiza as informações");
            questaoe.innerHTML=("e) O que coordena o grupo e define prazos");

            console.log("A: " + quantasa);
            console.log("B: " + quantasb);
            console.log("C: " + quantasc);
            console.log("D: " + quantasd);
            console.log("E: " + quantase);
        }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
 
        if(questaoemqueesta==7){
            numerodaquestao.innerHTML=("Questão 7:");

            titulo.innerHTML=("Qual dessas situações você se sente mais confortável?");

            questaoa.innerHTML=("a) Trabalhar com números ou tecnologia");
            questaob.innerHTML=("b) Criar algo visual ou artístico");
            questaoc.innerHTML=("c) Conversar e ajudar pessoas com problemas");
            questaod.innerHTML=("d) Estudar o meio ambiente ou fenômenos naturais");
            questaoe.innerHTML=("e) Planejar e executar projetos");

            console.log("A: " + quantasa);
            console.log("B: " + quantasb);
            console.log("C: " + quantasc);
            console.log("D: " + quantasd);
            console.log("E: " + quantase);
        }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        if(questaoemqueesta==8){
            numerodaquestao.innerHTML=("Questão 8:");

            titulo.innerHTML=("O que você mais valoriza em uma profissão");

            questaoa.innerHTML=("a) Resolver desafios complexos");
            questaob.innerHTML=("b) Ser criativo e inovador");
            questaoc.innerHTML=("c) Fazer a diferença na vida das pessoas");
            questaod.innerHTML=("d) Contribuir para um mundo mais sustentável");
            questaoe.innerHTML=("e) Ter estabilidade financeira ou liderança");

            console.log("A: " + quantasa);
            console.log("B: " + quantasb);
            console.log("C: " + quantasc);
            console.log("D: " + quantasd);
            console.log("E: " + quantase);
        }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        if(questaoemqueesta==9){
            numerodaquestao.innerHTML=("Questão 9:");

            titulo.innerHTML=("Qual ambiente de trabalho você prefere");

            questaoa.innerHTML=("a) Laboratório, escritório técnico ou com tecnologia");
            questaob.innerHTML=("b) Estúdio, agência criativa ou espaços culturais");
            questaoc.innerHTML=("c) Hospital, escola ou ONGs");
            questaod.innerHTML=("d) Campo, fazenda ou centros de pesquisa ambiental");
            questaoe.innerHTML=("e) Escritório corporativo ou eventos");

            console.log("A: " + quantasa);
            console.log("B: " + quantasb);
            console.log("C: " + quantasc);
            console.log("D: " + quantasd);
            console.log("E: " + quantase);
        }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        if(questaoemqueesta==10){
            numerodaquestao.innerHTML=("Questão 10:");

            titulo.innerHTML=("Onde você se imagina daqui a 10 anos?");

            questaoa.innerHTML=("a) Desenvolvendo novas tecnologias ou soluções científicas");
            questaob.innerHTML=("b) Criando conteúdo, como filmes, livros ou designs");
            questaoc.innerHTML=("c) Trabalhando diretamente com pessoas, como médico ou professor");
            questaod.innerHTML=("d) Protegendo o meio ambiente ou estudando a natureza");
            questaoe.innerHTML=("e) Gerenciando uma empresa ou liderando projetos");

            console.log("A: " + quantasa);
            console.log("B: " + quantasb);
            console.log("C: " + quantasc);
            console.log("D: " + quantasd);
            console.log("E: " + quantase);

        }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


    } else {
        Limpar();
        ConferirOpcao();
        console.log("---------------------------------------------------------------------------------");
        console.log("A: " + quantasa);
        console.log("B: " + quantasb);
        console.log("C: " + quantasc);
        console.log("D: " + quantasd);
        console.log("E: " + quantase);


        var APAGAR1=document.getElementById("APAGAR1");
        APAGAR1.remove();
        var APAGAR2=document.getElementById("APAGAR2");
        APAGAR2.remove();
        var APAGAR3=document.getElementById("APAGAR3");
        APAGAR3.remove();
        var APAGAR3=document.getElementById("APAGAR5");
        APAGAR5.remove();

        document.getElementById("botaopramudar").innerHTML=("");
        document.getElementById("botaopramudar").innerHTML=("Ver Resultado");
        questao.remove();
        questaoa.remove();
        questaob.remove();
        questaoc.remove();
        questaod.remove();
        questaoe.remove();
        numerodaquestao.remove();
        titulo.remove();
        botaopramudar.remove();
        VerResultado();

        
    }
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function VerResultado(){
    let resultado = document.getElementById("resultado");
    resultado.style.height="100%"
    AtualizarPorcentagem();
}


    /*--------------------------------------------------------------*/
    /*BARRA DE PORCENTAGEM*/

function AtualizarPorcentagem(){

    var fundodeporcentagem1=document.getElementById("fundodeporcentagem1");
    fundodeporcentagem1.classList.add("fundodeporcentagem");

    var fundodeporcentagem2=document.getElementById("fundodeporcentagem2");
    fundodeporcentagem2.classList.add("fundodeporcentagem");

    var fundodeporcentagem3=document.getElementById("fundodeporcentagem3");
    fundodeporcentagem3.classList.add("fundodeporcentagem");

    var fundodeporcentagem4=document.getElementById("fundodeporcentagem4");
    fundodeporcentagem4.classList.add("fundodeporcentagem");

    var fundodeporcentagem5=document.getElementById("fundodeporcentagem5");
    fundodeporcentagem5.classList.add("fundodeporcentagem");






    var resultadoescrito = document.getElementById("resultadoescrito");
    resultadoescrito.innerHTML="Resultados";

    var textoescritodoresultado = document.getElementById("textoescritodoresultado")
    textoescritodoresultado.innerHTML="De acordo com esse gráfico, essas são suas áreas de afinidade"

    /*var nomeexatasoutecnologia=document.getElementById("nomeexatasoutecnologia");
    nomeexatasoutecnologia.innerHTML="Exatas ou Tecnologia"
    nomeexatasoutecnologia.style.width = "100%";*/

    fundodeporcentagem = document.getElementById("fundodeporcentagem");
     


    const skillBarExatasoutecnologia = document.getElementById("exatasoutecnologia");
    skillBarExatasoutecnologia.style.width = quantasa*10+"%";
    skillBarExatasoutecnologia.innerHTML = quantasa*10+"% Exatas ou Tecnologia";
    //skillBarExatasoutecnologia

    const skillBarArtesoucominicacao = document.getElementById("artesoucominicacao");
    skillBarArtesoucominicacao.style.width = quantasb*10+"%";
    skillBarArtesoucominicacao.innerHTML = quantasb*10+"% Artes ou Comunicação";
    //skillBarArtesoucominicacao

    const skillBarHumanasousaude = document.getElementById("humanasousaude");
    skillBarHumanasousaude.style.width = quantasc*10+"%";
    skillBarHumanasousaude.innerHTML = quantasc*10+"% Humanas ou Saúde";
    //skillBarHumanasousaude

    const skillBarCienciasbiologicasouambientais = document.getElementById("cienciasbiologicasouambientais");
    skillBarCienciasbiologicasouambientais.style.width = quantasd*10+"%";
    skillBarCienciasbiologicasouambientais.innerHTML = quantasd*10+"% Ciências ou Biologia";
    //skillBarCienciasbiologicasouambientais

    const skillBarGestaoounegocios = document.getElementById("gestaoounegocios");
    skillBarGestaoounegocios.style.width = quantase*10+"%";
    skillBarGestaoounegocios.innerHTML = quantase*10+"% Gestão ou Negócios";
    //skillBarGestaoounegocios



/*
    const skillBar = document.getElementById("exatasoutecnologia");
    skillBar.style.width = quantasa*10+"%";
    skillBar.innerHTML = quantasa*10+"%";
    //skillBar
*/
}
