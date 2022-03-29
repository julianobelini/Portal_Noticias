const dbConnection = require('../../config/dbConnections.js');//importação da função que conecta com o banco de dados;

// ../ serve para retornar uma pasta no diretório

module.exports=function(app){
	var connection=dbConnection();//execução do bando de dados e armazenamento na var connection

//rota para a página de notícia;
app.get('/noticias',function(req,res){//endereço aonde quando houver requerimento será enviado/renderizado a pagina para o site;


	connection.query('select * from noticias', function(error, result){//query serve para buscar no banco de dados
		if (error) {
			console.log(error);//mensagem de erro caso aconteça algum problema;
		};
		res.render('noticias/noticias.ejs', {noticias:result}); //enviar a resposta na variavel result como vetor;
	});

	//res.render('noticias/noticia.ejs') renderiza o arquivo noticia ejs;
});

	}//função que será exportada para o app.js, utilizada para renderizar o arquivo ejs que irá aparecer na pagina quando acessada;

