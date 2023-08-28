const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://anaghakumbaleks:Anagha1605@cluster0.c14nklq.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(()=>{
    console.log(` register conn is successful`);
}).catch((err)=>{
    console.log(err);
})
