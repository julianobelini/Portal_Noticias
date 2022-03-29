module.exports=function(app){

//rota para a página principal do app;
app.get('/',function(req,res){//endereço aonde quando houver requerimento será enviado/renderizado a pagina para o site;
	res.render('home/index.ejs');//renderiza o arquivo index.ejs;
}); 


}//função que será exportada para o app.js, utilizada para renderizar o arquivo ejs que irá aparecer na pagina quando acessada;