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
    console.log(dados);

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
    let database, set, categorias, curtida;    
    database = inicializaDB();
    categorias = ['Cultura','Esportes','Musica','Tecnologia']; 
    set = ``; 

    

    for(let i = 0; i < database.assuntos.length; i++){
        coments =  (database.comentarios).filter(data => data.idAssunto == i);
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
            <div><img class="like" id="${i}" src="${curtida}" alt=""> </div>
            <div><img src="assets/chatW.png" alt=""> <h5>${coments.length}</h5></div>
            <a href="post.html?id=${i}">
                Ver mais
            </a>
        </article>
      
        `;
    }
    $('#box-assuntos').append(set); 
}

function showComments(id){    
    let database, set, categorias, comments;
    $('#box-comentarios').html(''); 

    set = ``; 
    database = inicializaDB();
    comments = (database.comentarios).filter( data => data.idAssunto == id); 
    console.log(comments);

    for(let i = 0; i < comments.length; i++){
        
        set += 
        `
        <article class="box-comentario">
            <p> 
                ${comments[i].conteudo}
                
            </p>
            <div> 
                <h5>${comments[i].nome}</h5>
                <h5>${comments[i].data}</h5>
            </div>
            
        </article>
        `;
    }
    $('#box-comentarios').append(set); 
}

function somaCurtida(id){
    
}