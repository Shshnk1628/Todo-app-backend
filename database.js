const mongoose = require('mongoose');

//for access the data present inside the .env file
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => {
         console.log("DB ka connection is successfull");
})
    .catch((error) => {
        console.log("DB connection m kuch issue h");
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;