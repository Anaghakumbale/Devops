const express=require("express");

const path=require("path");

const static_path=path.join(__dirname, "../public");
const template_path=path.join(__dirname, "../templates/views");
const partials_path=path.join(__dirname, "../templates/partials");
const app =express();

const hbs=require("hbs");

require("./db/connect");
const {Registration,Addadmin,Adlogin,Addnews} = require("./models/registers");
app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);
app.get("/", (req,res) => {
    res.render("index");
})
app.get("/registration",(req,res) => {
   res.render("registration");
})
app.get("/studentlogin",(req,res) => {
    res.render("studentlogin");
 })
 app.get("/studentdash",(req,res) => {
    res.render("studentdash");
 })
 app.get("/adminlogin",(req,res) => {
    res.render("adminlogin");
 })
 app.get("/addadmin",(req,res) => {
    res.render("addadmin");
 })
 app.get("/admindashboard",(req,res) => {
    res.render("admindashboard");
 })
 app.get("/afterreg",(req,res) => {
    res.render("afterreg");
 })
 app.get("/addsnews",(req,res) => {
  res.render("addsnews");
})
app.get("/eligibility",(req,res) => {
  res.render("eligibility");
})
 app.get('/slist', async (req, res) => {
    try {
      const data = await Addadmin.find({}, 'scholarshipname documents other more'); // Only fetch the 'title' field
      res.render('slist', { data }); // Render the 'index' template with data
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(400).send('Internal Server Error');
    }
  });
  app.get("/adminschllist",async (req,res) => {
    try {
      const data = await Addadmin.find({}, 'scholarshipname documents other more'); // Only fetch the 'title' field
      res.render('adminschllist', { data }); // Render the 'index' template with data
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(400).send('Internal Server Error');
    }
 })
 app.get("/snews",async (req,res) => {
  try {
    const data = await Addnews.find({}, 'news link'); // Only fetch the 'news , link' field
    res.render('snews', { data }); // Render the 'snews' template with data
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(400).send('Internal Server Error');
  }
})
 app.get("/adminsnews",async (req,res) => {
  try {
    const data = await Addnews.find({}, 'news link'); // Only fetch the 'title' field
    res.render('adminsnews', { data }); // Render the 'index' template with data
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(400).send('Internal Server Error');
  }
})
app.post("/registration", async(req,res)=>{
    try {
        const password=req.body.password;
        const cpassword =req.body.confirmpassword;
        
        if(password == cpassword){
            const registerStudent = new Registration({
                studentname : req.body.studentname,
                email:req.body.email,
                phoneno:req.body.phoneno,
                password:req.body.password,
                confirmpassword:req.body.confirmpassword
            })
            const registered =await registerStudent.save();
            res.status(201).render("afterreg");
        }else{
            res.send("password not matching")
        }
    } catch(error){
        res.status(400).send(error);
    }
})
app.post("/adminlogin", async (req, res) => {
  try {
      const name = req.body.name;
      const password = req.body.password;
      const username = await Adlogin.findOne({ name: name });

     if (username.password === password) {
              res.status(201).render("admindashboard");
          } else {
              res.send("Passwords do not match");
          }
  } catch (error) {
      console.error("An error occurred:", error.message);
      res.status(400).send(error);
  }
});


app.post("/studentlogin", async(req,res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    
    const useremail= await Registration.findOne({email:email});
    if(useremail.password == password){
        res.status(201).render("studentdash");
    }
    else{
        res.send("passwords not matching");
    }
  } catch (error) {
    console.error("An error occurred:", error.message);
      res.status(400).send(error);
  }
 })
 
 app.post("/addadmin", async(req,res) =>{
    try{
        const Addscholarship = new Addadmin({
        scholarshipname: req.body.scholarshipname,
        amount:req.body.amount,
        grade10:req.body.grade10,
        year10:req.body.year10,
        grade12:req.body.grade12,
        year12: req.body.year12,
        course:req.body.course,
        diploma:req.body.diploma,
        management:req.body.management,
        phd:req.body.phd,
        currentyear: req.body.currentyear,
        state:req.body.state,
        caste:req.body.caste,
        gender:req.body.gender,
        income:req.body.income,
        otherscholarship: req.body.otherscholarship,
        documents:req.body.documents,
        other:req.body.other,
        more:req.body.more,
 })
 const addedscholarship = await Addscholarship.save();
 res.status(201).render("admindashboard");
} catch(error){
    res.status(400).send(error);
}
 })


 app.post('/delete/:id', async (req, res) => {
    await Addadmin.findByIdAndDelete(req.params.id);
    res.redirect('/adminschllist');
  });



  app.post("/addsnews", async(req,res) =>{
    try{
        const Items = new Addnews({
        news: req.body.news,
        link:req.body.link
        
 })
 const Item = await Items.save();
 res.status(201).render("admindashboard");
} catch(error){
  console.error("An error occurred:", error.message);
    res.status(400).send(error);
}
 });
 app.post('/delete1/:id', async (req, res) => {
  await Addnews.findByIdAndDelete(req.params.id);
  res.redirect('/adminsnews');
});

app.post('/eligibility' , async(req,res) => {
try{
    
    const grade10 = req.body.grade10;
    const year10 = req.body.year10;
    const grade12 = req.body.grade12;
    const year12 = req.body.year12;
    const course = req.body.course;
    const diploma = req.body.diploma;
    const management = req.body.management;
    const phd = req.body.phd;
    const currentyear =  req.body.currentyear;
    const state = req.body.state;
    const caste = req.body.caste;
    const gender = req.body.gender;
    const income = req.body.income;
    const otherscholarship =  req.body.otherscholarship;

    const allData = await Addadmin.find();
    let matches = [];
    let failedConditions = [];
    allData.forEach(data => {
      const eligibility = scholarship.eligibility;

      let failed = false;
      if (eligibility.grade10 && data.grade10 <= grade10){
        failed = true;
        failedConditions.push('grade10');
      }
      if(eligibility.year10 && data.year10 <= year10){
        failed = true;
        failedConditions.push('year10');
      }
        if(eligibility.grade12 && data.grade12 <= grade12){
          failed = true;
        failedConditions.push('grade12');
        }
        if(eligibility.year12 && data.year12 <= year12){
          failed = true;
          failedConditions.push('year12');
        }
        if(eligibility.course && data.course === course){
          failed = true;
        failedConditions.push('course');
        } 
        if(eligibility.diploma && data.diploma === diploma){
          failed = true;
        failedConditions.push('diploma');
        } 
        if(eligibility.management && data.management === management){
          failed = true;
        failedConditions.push('management');
        } 
        if(eligibility.phd && data.phd === phd){
          failed = true;
        failedConditions.push('phd');
        } 
        if(eligibility.currentyear && data.currentyear === currentyear){
          failed = true;
        failedConditions.push('currentyear');
        }
        if(eligibility.state && data.state === state){
          failed = true;
        failedConditions.push('state');
        } 
        if(eligibility.caste && data.caste === caste){
          failed = true;
        failedConditions.push('caste');
        } 
        if(eligibility.gender && data.gender === gender){
          failed = true;
        failedConditions.push('gender');
        } 
        if(eligibility.income && data.income >= income){
          failed = true;
        failedConditions.push('income');
        }
        if(eligibility.otherscholarhsips && data.otherscholarship === otherscholarship) {
          failed = true;
          failedConditions.push('otherscholarship');
        }
        if (!failed) {
          matches.push(data.scholarshipname);
        }
  })
  if (matches.length > 0) {
    res.render('result', { names: matches.join(', ')});
  } else {
    res.render('result', { names: 'No match found', failedConditions });
  }
}
  catch (error) {
    console.error("An error occurred:", error.message);
    console.error(error);
    res.render('result', { names: 'Error occurred' });
  }
});
app.listen(3000);
