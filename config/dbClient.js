import { MongoClient } from 'mongodb';
import 'dotenv/config';
import mongoose from 'mongoose';

class dbClient {

    constructor() {
        this.connectarBaseDatos();
    }

    async connectarBaseDatos() {
        const queryString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB}/rollerbcn?retryWrites=true&w=majority`;
        await mongoose.connect(queryString);
    }


    async cerrarConexion() {
        try {
            await mongoose.disconnect();
            console.log('Desconectado de la base de datos');
        } catch (error) {
            console.log(error);
        }
    }


    // SIN MONGOOSE:
    // constructor() {
    //     const queryString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB}/?retryWrites=true&w=majority&appName=rollerbcn`;
    //     // this.client = new MongoClient(queryString);
    //     this.conectarBD();
    // }
       // async conectarBD() {
    //     try {
    //         await this.client.connect();
    //         this.db = this.client.db('rollerbcn');
    //         console.log('Conectado al servidor de base de datos');
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

 
}

export default new dbClient();