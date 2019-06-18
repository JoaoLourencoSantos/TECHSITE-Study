var url   = window.location.search.replace("?id=", "");
url = parseInt(url);
window.addEventListener('load',showPost(url));
window.addEventListener('load',showComments(url));

function inicializaDB() {
    let dataBase = localStorage.getItem("DataBase");
    if (!dataBase) {
        dataBase = { comentarios: [], assuntos: [] };
    } else {
        dataBase = JSON.parse(dataBase);
    }
    return dataBase;
}

function showPost(id) {
    let database, coments, curtida,comentario;
    database =  inicializaDB();
    coments =  (database.comentarios).filter(data => data.idAssunto == id);

    if(database.assuntos[id].curtidas == 0){
        curtida = 'assets/heartW.png';
    }else{
        curtida = 'assets/heart.png';
    }
    if(coments.length > 0){
        comentario = 'assets/chat.png';
    }else{            
        comentario = 'assets/chatW.png';
    }

    let set =
        `
        <header>
            <h3>${database.assuntos[id].titulo}</h3>
            <div><img src="${curtida}" alt=""> </div>
            <div><img src="${comentario}" alt=""> <h5>${coments.length}</h5></div>
        </header>
        <img src="assets/fundo3.jpg" alt="">
        <p id="conteudo">${database.assuntos[id].conteudo} </p>
    `;
    $('#post').append(set);
}
function showComments(id) {
    let database =  inicializaDB();
    let arrayComents = (database.comentarios).filter(data => data.idAssunto == id);
    let set = ``;
    for(let i = 0; i < arrayComents.length; i++){
        set += 
        `
        <div>
            <p>
               ${arrayComents[i].conteudo}

            </p>
            <h3 id="titulo"> ${arrayComents[i].nome},  ${arrayComents[i].data}</h3>
        </div>
        `;
    }       
    $('#coments').append(set);
}
