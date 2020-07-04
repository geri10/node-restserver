//=====================
//puerto
//=====================
process.env.PORT = process.env.PORT || 3000

//=====================
//entorno
//=====================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=====================
//base de datos
//=====================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://yerson:QP0Gdnskt8iQueQ4@cluster0.6hewx.azure.mongodb.net/cafe';
}

process.env.URLDB = urlDB;