const mongoose = require('mongoose');


// --  Connect to mongo db  --
mongoose.connect("mongodb://localhost/dbstore", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then((db) => console.log('[ Db is Connected ]'))
.catch((err)  => console.log(err));