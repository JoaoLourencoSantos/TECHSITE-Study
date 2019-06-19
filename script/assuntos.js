window.addEventListener('load',showPosts());

$(document).on('click','.like',function(){ // metodo para fazer o mesmo clique em vários objetos
    let id = $(this).attr('id',);//trocando a cor
    let database = inicializaDB();
    let curtida ;
    if(database.assuntos[id].curtidas == 0){
        curtida = 1;
        $(this).attr('src','assets/heart.png');//trocando a cor
    }else{
        curtida = 0;
        $(this).attr('src','assets/heartW.png');//trocando a cor
    }
    let dados =  {
        nome      : database.assuntos[id].nome,
        data      : database.assuntos[id].data,
        titulo    : database.assuntos[id].titulo,
        categoria : database.assuntos[id].categoria,
        conteudo  : database.assuntos[id].conteudo,
        curtidas  : curtida    
    }

    if(dados)
    {
        database.assuntos[id] = (dados);
        localStorage.setItem("DataBase",JSON.stringify(database));
    }

});

function inicializaDB(){
    let dataBase = localStorage.getItem("DataBase");
    if(!dataBase)
    {
        dataBase = { comentarios: [], assuntos: [] };
    }else
    {
        dataBase =  JSON.parse(dataBase);            
    }
    return dataBase;
}

function showPosts(){    
    let database, set, categorias, curtida, comentario;    
    database = inicializaDB();
    categorias = ['Desenvolvimento','Metodologia','Linguagem','Hardware']; 
    set = ``; 

    

    for(let i = database.assuntos.length - 1; i >= 0 ; i--){
        coments =  (database.comentarios).filter(data => data.idAssunto == i);
        if(coments.length > 0){
            comentario = 'assets/chat.png';
        }else{            
            comentario = 'assets/chatW.png';
        }
        if(database.assuntos[i].curtidas == 0){
            curtida = 'assets/heartW.png';
        }else{
            curtida = 'assets/heart.png';
        }
        set += 
        `
        
        <article class="box-post"  >
            <div> 
                <h5>${database.assuntos[i].titulo}</h5>
            </div>
            <div> 
                <h5>${categorias[database.assuntos[i].categoria]}</h5>
            </div>
            <div> 
                <h5>${database.assuntos[i].data}</h5>
            </div>
            <div><img class="like" id="${i}" src="${curtida}" alt=""> </div>
            <div><img src="${comentario}" alt=""> <h5>${coments.length}</h5></div>
            <a href="post.html?id=${i}">
                Ver mais
            </a>
        </article>
      
        `;
    }
    $('#box-assuntos').append(set); 
}

