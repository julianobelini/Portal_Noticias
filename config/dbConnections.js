const mysql= require('mysql');//importacao modulo mysql

module.exports=function(){
    return mysql.createConnection({

        host: 'localhost',
        user: 'root',
        password: 'ifms',
        database: 'portal_noticias'

    });//conexão com o banco de dados portal_noticias

}