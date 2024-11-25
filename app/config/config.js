require('dotenv').config();

module.exports ={
    development:{
        dialect :"sqlite",
        storage: "./database/test.db",
    },
    production:{
        dialect:"sqlite",
        storage:"./database/test.db"
    },
};

