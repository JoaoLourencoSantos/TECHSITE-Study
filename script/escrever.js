let data =  new Date();

document.querySelector("#btn-salvar").addEventListener('click',function(){
    setarDados(document.querySelector(".index-form"));
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

function setarDados(dado){
    let dataBase =  inicializaDB();
    console.log(dado[3].value);
    let dados = 
    {
        nome      : dado[0].value,
        data      : data.getDate() +"/"+(data.getMonth()+1)+"/"+ data.getFullYear(),
        titulo    : dado[1].value,
        categoria : parseInt(dado[2].value),
        imagem    : dado[3].value,
        conteudo  : dado[4].value,
        curtidas  : 0    
    }
    if(dados)
    {
        dataBase.assuntos.push(dados);
        localStorage.setItem("DataBase",JSON.stringify(dataBase));
    }    
}


