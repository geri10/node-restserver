//=====================
//puerto
//=====================
process.env.PORT = process.env.PORT || 3000

//=====================
//entorno
//=====================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=====================
//Vencimiento del token
//=====================
// 60 segundo
// 60 minutos
// 24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//=====================
//seed de autenticacion
//=====================

process.env.SEED = process.env.SEED || 'este-es-el-secret-desarrollo';


//=====================
//base de datos
//=====================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

//=====================
//google client id
//=====================

process.env.CLIENT_ID = process.env.CLIENT_ID || '1021479244911-6o58jn9gaaotft6a0g4inpdg24vnck25.apps.googleusercontent.com';

process.env.URLDB = urlDB;