let data =  new Date();
var img = '';
document.querySelector("#btn-salvar").addEventListener('click',function(){
    setarDados(document.querySelector(".index-form"));
    imageHandler;
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
    let dados = 
    {
        nome      : dado[0].value,
        data      : data.getDate() +"/"+(data.getMonth()+1)+"/"+ data.getFullYear(),
        titulo    : dado[1].value,
        categoria : parseInt(dado[2].value),
        imagem    : img,
        conteudo  : dado[4].value,
        curtidas  : 0    
    }
    if(dados)
    {
        dataBase.assuntos.push(dados);
        localStorage.setItem("DataBase",JSON.stringify(dataBase));
    }    


}


function imageHandler(e2) {    
    img = (e2.target.result );
}

function loadimage(e1) {
    var filename = e1.target.files[0];
    var fr = new FileReader();    
    fr.onload = imageHandler;
    fr.readAsDataURL(filename);
}

window.onload = function () {
    var y = document.getElementById("get-image");
    y.addEventListener('change', loadimage, false);
}

