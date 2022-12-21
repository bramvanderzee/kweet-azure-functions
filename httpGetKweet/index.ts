import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Mongoose } from 'mongoose';
const Kweet = require('./kweet')

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const mongoose = new Mongoose;
    const connstring = process.env.MongoDBUrl;

    mongoose.connect(connstring).then(
        () => {
            console.log('connected to db');
        }
    );

    const kweets = Kweet.find()
    context.res = {
        body: kweets
    };
};

export default httpTrigger;
