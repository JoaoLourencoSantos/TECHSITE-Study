let fakeDB = 
[
    {
        nome      : "João Marcos",
        data      : "01/02/2019",
        titulo    : "Java",
        categoria : 2,
        conteudo  : `Java é uma linguagem de programação e plataforma computacional lançada pela primeira vez pela Sun Microsystems em 1995. Existem muitas aplicações e sites que não funcionarão, a menos que você tenha o Java instalado, e mais desses são criados todos os dias. O Java é rápido, seguro e confiável. De laptops a datacenters, consoles de games a supercomputadores científicos, telefones celulares à Internet, o Java está em todos os lugares!.`,
        curtidas  : 0    
    } ,
    {
        nome      : "Pedro",
        data      : "25/03/2019",
        titulo    : "Scrumban",
        categoria : 1,
        conteudo  : `Nós conhecemos o Kanban e o Scrum como metodologias de gerenciamento Agile. O Scrumban combina as melhores características de ambos métodos. Ele junta a natureza normativa do Scrum e a capacidade de melhoria dos processos do Kanban, permitindo que as equipes cheguem ao desenvolvimento Agile para melhorar constantemente seus processos. Scrumban está se tornando popular em indústrias onde o desenvolvimento de projeto e a manutenção andam de mãos dadas.
        Quadro branco Scrumban
        O Scrumban evoluiu do Scrum com o suplemento do eixo das práticas do Kanban. Elas são: visualização, limites para trabalho em andamento, gerenciamento de fluxo de trabalho, mantendo as políticas explícitas.
        Os princípios de implementação do Scrumban básico incluem:
        - Começar com as cerimônias, quadros e funções que você usa agora.
        - Concordar em buscar melhorias para atingir um processo mais efetivo.
        - Respeitar as funções e responsabilidades atuais enquanto busca melhorá-las com facilidade.
        `,
        curtidas  : 0    
    },
    {
        nome      : "Marcelo",
        data      : "07/04/2019",
        titulo    : "Java Script",
        categoria : 2,
        conteudo  : `A primeira coisa que você precisa saber: JavaScript não tem nada a ver com Java. Java é uma linguagem server-side, como PHP, Ruby, Python e tantas outras. A única coisa parecida entre eles é o nome. ;-)

        Sabendo disso, quero que saiba que JavaScript é uma linguagem de programação client-side. Ela é utilizada para controlar o HTML e o CSS para manipular comportamentos na página. Me pergunte agora: "Como assim comportamento?". Agora eu respondo: um comportamento comum, por exemplo, é um submenu. Sabe quando você passa o mouse em um ítem do menu, e aparece um submenu com vários outros ítens? Pois é. A obrigação de fazer aparecer esse submenu é do JavaScript. O submenu estava escondido, e quando passamos o mouse no ítem, o submenu aparece. Todo esse comportamento quem vai executar é o JavaScript.
        `,
        curtidas  : 0    
    },
    {
        nome      : "Mathias",
        data      : "12/06/2019",
        titulo    : "iMac Pro",
        categoria : 3,
        conteudo  : `O Mac Pro 2019 é a nova versão do desktop para uso profissional da Apple. O dispositivo foi anunciado neste mês, seis anos após a última atualização da linha, em 2013. O computador conta com grandes melhorias em comparação com a versão anterior, como um novo processador Intel Xeon e possibilidade de memória RAM de até 1,5 TB. Além disso, o design é completamente diferente do modelo antigo e há novos recursos interessantes.Com lançamento previsto para o segundo semestre deste ano e preço inicial de US$ 5.999 (cerca de R$ 23,2 mil em conversão direta, sem impostos), a Apple confirmou a chegada do produto no Brasil ainda em 2019, mas não deu detalhes sobre data e valores. Confira a seguir as principais diferenças entre o modelo atual e o de 2013, que ainda está à venda na Apple Store por a partir de R$ 23,4 mil.`,
        curtidas  : 0    
    } ,
    {
        nome      : "Thiago",
        data      : "12/06/2019",
        titulo    : "Python",
        categoria : 2,
        conteudo  : `Python foi criado no final dos anos oitenta(1989) por Guido van Rossum no Centro de Matemática e Tecnológia da Informação (CWI, Centrum Wiskunde e Informatica), na Holanda, como sucessor da linguagem de programação ABC, capaz de lidar com exceções e interagir com o sistema operacional Amoeba.

        O nome da língua vem do gosto de seu criador pelos humoristas britânicos Monty Python. Van Rossum é o principal autor de Python, e seu papel central contínuo na decisão da direção de Python é reconhecido, referindo-se a ele como Ditador de Vida Benevolente (em inglês: Benevolent Dictator for Life, BDFL).
        
        Python é uma linguagem de programação interpretada cuja filosofia enfatiza uma sintaxe favorecendo um código mais legível, além de ser “free”.`,
        curtidas  : 0    
    } 
];

window.addEventListener('load',showDestaques());

let data = new Date();



document.querySelector("#btn-salvar").addEventListener('click', function () {
    setarDados(document.querySelector(".index-form"));
});



function inicializaDB() {
    let database = localStorage.getItem("DataBase");
    if (!database) {
        database = { comentarios: [], assuntos: [] };
        database.assuntos  = fakeDB;
        localStorage.setItem("DataBase", JSON.stringify(database));

    } else {
        database = JSON.parse(database);
    }
    return database;
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
    let arrayImg = ['code.png','method.png','java.png','gears.png'];

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

