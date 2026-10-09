/* =====================================
   DADOS DE TESTE
===================================== */

const lojas = [

    {
        numero: "101",
        nome: "Loja Exemplo 1",
        status: "funcionando"
    },

    {
        numero: "102",
        nome: "Loja Exemplo 2",
        status: "funcionando"
    },

    {
        numero: "103",
        nome: "Loja Exemplo 3",
        status: "vaga"
    },

    {
        numero: "104",
        nome: "Loja Exemplo 4",
        status: "fechada"
    },

    {
        numero: "105",
        nome: "Loja Exemplo 5",
        status: "funcionando"
    },

    {
        numero: "106",
        nome: "Loja Exemplo 6",
        status: "tapume"
    }

];


/* =====================================
   ELEMENTOS
===================================== */

const telaInicial =
    document.getElementById("tela-inicial");

const telaRoteiro =
    document.getElementById("tela-roteiro");

const telaLoja =
    document.getElementById("tela-loja");

const listaLojas =
    document.getElementById("lista-lojas");

const selectPiso =
    document.getElementById("piso");

const periodo =
    document.getElementById("periodo");

const btnIniciar =
    document.getElementById("btn-iniciar");

const btnVoltar =
    document.getElementById("btn-voltar");

const btnVoltarRoteiro =
    document.getElementById("btn-voltar-roteiro");

const btnSalvar =
    document.getElementById("btn-salvar");


/* =====================================
   STATUS
===================================== */

const statusEmoji = {

    funcionando: "🟢",

    fechada: "🔴",

    vaga: "⚪",

    tapume: "🟡",

    nova: "🔵"

};


/* =====================================
   INICIAR VISTORIA
===================================== */

btnIniciar.addEventListener("click", () => {

    if (!periodo.value) {

        alert("Selecione o período da vistoria.");

        return;
    }


    if (!selectPiso.value) {

        alert("Selecione o piso.");

        return;
    }


    document.getElementById("titulo-piso")
        .textContent =
        selectPiso.options[
            selectPiso.selectedIndex
        ].text;


    document.getElementById("nome-periodo")
        .textContent =
        formatarPeriodo(periodo.value);


    mostrarTela(telaRoteiro);

    carregarLojas();

});


/* =====================================
   CARREGAR LOJAS
===================================== */

function carregarLojas() {

    listaLojas.innerHTML = "";

    document.getElementById("total-lojas")
        .textContent = lojas.length;


    lojas.forEach((loja, index) => {

        const card =
            document.createElement("div");

        card.className = "store-card";


        card.innerHTML = `

            <div class="store-number">
                ${loja.numero}
            </div>

            <div class="store