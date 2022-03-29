module.exports=function(app){

//rota para a página da tela de admin do sistema/formulario de inclusão de noticias;
app.get('/formularioinclusaonoticia',(req,res)=>{//endereço aonde quando houver requerimento será enviado/renderizado a pagina para o site;
	res.render('admin/form_add_noticia.ejs');
});

    }//função que será exportada para o app.js, utilizada para renderizar o arquivo ejs que irá aparecer na pagina quando acessada;
// a bara / de url é localhost:3000;
// o get define que é caminho ;
//{} é elemeto json;
//os parametros são separados por vírgulas dentro do parentese: '/formularioinclusaonoticia'(primeiro parametro), (req,res)=>{//endereço aonde quando houver requerimento será enviado/renderizado a pagina para o site res.render('admin/form_add_noticia.ejs');(segundo parametro);