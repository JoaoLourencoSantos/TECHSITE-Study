window.addEventListener('load',showDestaques());

let data = new Date();

document.querySelector("#btn-salvar").addEventListener('click', function () {
    setarDados(document.querySelector(".index-form"));
});

function inicializaDB() {
    let dataBase = localStorage.getItem("DataBase");
    if (!dataBase) {
        dataBase = { comentarios: [], assuntos: [] };
    } else {
        dataBase = JSON.parse(dataBase);
    }
    return dataBase;
}

function setarDados(dado) {
    let database =  inicializaDB();
    let dados =
    {
        idAssunto: database.assuntos.length - 1,
        nome: dado[0].value,
        data: data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear(),
        conteudo: dado[1].value
    }
    if (dados) {
        database.comentarios.push(dados);
        localStorage.setItem("DataBase", JSON.stringify(database));
    }
}

function showDestaques() {
    let database =  inicializaDB();
    let arrayImg = ['theatre-masks.png','trophy.png','music-player.png','laptop.png'];

    let set =
        `
        <img src="assets/${arrayImg[database.assuntos[database.assuntos.length - 1].categoria]} " alt="icone-debate">
        <div>
            <h3> ${database.assuntos[database.assuntos.length - 1].titulo} </h3>
            <span>  ${database.assuntos[database.assuntos.length - 1].conteudo}</span>
            <h5> Escritor ${database.assuntos[database.assuntos.length - 1].nome}, ${database.assuntos[database.assuntos.length - 1].data} </h5>
        </div>
    `;
    $('#main-destaque').append(set);
}

