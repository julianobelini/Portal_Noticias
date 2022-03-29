const app=require('./config/server.js');//importação do modulo
const rotaHome=require('./app/routes/home.js')(app);//importação do modulo da rota do arquivo home  e execução
const rotaAdmin=require('./app/routes/admin.js')(app);//importação do modulo da rota do arquivo admin e execução
const rotaNoticia=require('./app/routes/noticia.js')(app);//importação do modulo da rota do arquivo noticia e execução

//require significa importação de algo;



//Cria um servidor rodando na porta 3000
app.listen('3000',function(){//listen cria um servidor e escuta requisições vindo do mesmo 
	console.log('Servidor rodando na porta 3000');
});