const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const studentSchema =new mongoose.Schema({
    studentname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneno:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }
})

studentSchema.pre("save", async function(next){

    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
        console.log(this.password);
        
        this.confirmpassword = undefined;
    }

  next();
})

const Registration = new mongoose.model("Register", studentSchema);
const listSchema =new mongoose.Schema({
    scholarshipname:{
        type:String,
        required:true,
        unique:true
    },
    amount:{
        type:Number,
        required:true,
    },
    grade10:{
        type:Number,
        
    },
    year10:{
        type:Number,
       
    },
    grade12:{
        type:Number,
        
    },
    year12:{
        type:Number,
        
    },
    course:{
        type:String,
       
    },
   diploma:{
        type:String,
        
    },
    management:{
        type:String,
        
    },
    phd:{
        type:String,
        
    },
    currentyear:{
        type:Number,
        
    },
   state:{
        type:String,
        
    },
    caste:{
        type:String,
        
    },
    gender:{
        type:String,
        
    },
    income:{
        type:Number,
       
    },
    otherscholarship:{
        type:String,
        
    },
    documents:{
        type:String,
        required:true
    },
    other:{
        type:String,
        
       },
    more:{
        type:String,
        required:true
    }
})
const Addadmin = new mongoose.model("Scholarship", listSchema);

const AdminSchema =new mongoose.Schema({
   name:{
       type:String,
       required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
const Adlogin = new mongoose.model("Adminlogin", AdminSchema);

const NewsSchema = new mongoose.Schema({
    news:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }
});

const Addnews = new mongoose.model("News",NewsSchema);
module.exports = {Registration,Addadmin,Adlogin,Addnews};

