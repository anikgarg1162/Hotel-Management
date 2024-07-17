const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://WebWarriors:web1234@hotelsystem.wzq9gxo.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("my db is connected")
})
.catch((error) => {
    console.log("some problem occured",error)
});
