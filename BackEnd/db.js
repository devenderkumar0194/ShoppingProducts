const mongoose = require('mongoose');
const db =  (req, res) => {
    
    const databaseUser = process.env.DATABASE_USER;
    const databasePassword = process.env.DATABASE_PASSWORD;
    const databaseName = process.env.DATABASE_NAME;

    // const str = "mongodb+srv://devenderthapar94:ybQSPhy2bC9lUTZs@cluster0.bq09y.mongodb.net/shoppingProduct?retryWrites=true&w=majority";
    const str = "mongodb://admin:qwerty@localhost:27017/shoppingProduct?authSource=admin";

    mongoose.connect(str, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
    
}

module.exports = db();