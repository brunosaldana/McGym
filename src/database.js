const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://brunosaldana:tarda1234@mcgym.1ppc0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then (db => console.log('DB is connected'))
    .catch((err) => console.error(err));