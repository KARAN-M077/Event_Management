const mongoose=require('mongoose')
const express=require('express')
const path = require('path')
const bodyparser=require('body-parser');
const exp = require('constants');
const  hostname  = 'localhost';
const port=4500;
const encoder=bodyparser.urlencoded();
const app=express();
app.use('/css',express.static('css'));
app.use('/images',express.static('images'));
app.use('/', express.static(path.join(__dirname,'public')))
app.use(bodyparser.urlencoded({extended:true}))
//mongodb connection
app.use(bodyparser.urlencoded());
mongoose.connect('mongodb://127.0.0.1:27017/event', {useNewUrlParser: true})
.then(() => {
        console.log('Connected Successfully!');
    })
    .catch(() => {
        console.log('Connection failed!');
    });
    const bodyParser = require('body-parser');


//get index
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
}
)
//get login
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
})
//get navbar.html
app.get('/navbar',(req,res)=>{
    res.sendFile(__dirname+'/navbar.html');
})
//get paper.html
app.get('/paper',(req,res)=>{
    res.sendFile(__dirname+'/paper.html');
})
//get tech.html
app.get('/tech',(req,res)=>{
    res.sendFile(__dirname+'/tech.html');
})
//get business.html
app.get('/bun',(req,res)=>{
    res.sendFile(__dirname+'/bun.html');
})
//get electronics.html
app.get('/elec',(req,res)=>{
    res.sendFile(__dirname+'/elec.html');
})
//get quiz.html
app.get('/quiz',(req,res)=>{
    res.sendFile(__dirname+'/quiz.html');
})
//get ideathon.html
app.get('/ideathon',(req,res)=>{
    res.sendFile(__dirname+'/ideathon.html');
})
//get future.html
app.get('/future',(req,res)=>{
    res.sendFile(__dirname+'/future.html');
})
//get datahack.html
app.get('/datahack',(req,res)=>{
    res.sendFile(__dirname+'/datahack.html');
})
//get code.html
app.get('/code',(req,res)=>{
    res.sendFile(__dirname+'/code.html');
})
//get details.html
app.get('/details',(req,res)=>{
  res.sendFile(__dirname+'/details.html');
})
//get paperinfo.html
app.get('/paperinfo',(req,res)=>{
  
  res.sendFile(__dirname+'/paperinfo.html');
})

app.get('/buninfo',(req,res)=>{
  res.sendFile(__dirname+'/buninfo.html');
})

app.get('/codeinfo',(req,res)=>{
  res.sendFile(__dirname+'/codeinfo.html');
})

app.get('/datahackinfo',(req,res)=>{
  res.sendFile(__dirname+'/datahackinfo.html');
})

app.get('/elecinfo',(req,res)=>{
  res.sendFile(__dirname+'/elecinfo.html');
})

app.get('/futureinfo',(req,res)=>{
  res.sendFile(__dirname+'/futureinfo.html');
})

app.get('/ideathoninfo',(req,res)=>{
  res.sendFile(__dirname+'/ideathoninfo.html');
})

app.get('/quizinfo',(req,res)=>{
  res.sendFile(__dirname+'/quizinfo.html');
})

app.get('/techinfo',(req,res)=>{
  res.sendFile(__dirname+'/techinfo.html');
})
//creating schema - paper
const contactSchema = new mongoose.Schema({
    Name1:String,
    Roll1:String,
    Dept1:String,
    Email:String,
    Name2:String,
    Roll2:String,
    Dept2:String,
    Transaction:String,
    Count: Number

})
contactSchema.pre('save', async function(next) {
  const Count = mongoose.model(this.constructor.modelName);
  const count = await Count.countDocuments();
  this.Count = count + 1; // Increment count and assign to the document
  next();
});
//get details from the user - paper
app.post("/paper", (req, res) => {
  var name1 = req.body.name1;
  var roll1 = req.body.roll1;
  var dept1 = req.body.dept1;
  var email = req.body.email;
  var name2 = req.body.name2;
  var roll2 = req.body.roll2;
  var dept2 = req.body.dept2;
  var transaction = req.body.transaction;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var transactionRegex = /^[a-zA-Z0-9]+$/;

  if (name1 === "" || roll1 === "" || dept1 === "" || !emailRegex.test(email) || name2 === "" || roll2 === "" || dept2 === "" || (transaction !== "" && !transactionRegex.test(transaction)) || (transaction === "" && file === "")) {
      return res.status(400).send("Please fill in all fields and provide a valid email address and Transaction ID.");
  }

  if (transaction !== "" && !transactionRegex.test(transaction)) {
      return res.status(400).send("Please enter a valid transaction ID (alphanumeric characters only).");
  }

  const Contact = mongoose.model("paper", contactSchema);
  const contact = new Contact({
      Name1: name1,
      Roll1: roll1,
      Dept1: dept1,
      Email: email,
      Name2: name2,
      Roll2: roll2,
      Dept2: dept2,
      Transaction: transaction,
  });

  contact.save()
      .then(() => {
          console.log("Successfully saved");
          res.sendStatus(200);
      })
      .catch((error) => {
          console.error(error);
          res.status(500).send("An error occurred while saving data.");
      });
});

  //get details from the user - tech
  app.post("/tech", (req, res)=> {
    var name1 = req.body.name1;
    var roll1 = req.body.roll1;
    var dept1 = req.body.dept1;
    var email = req.body.email;
    var name2 = req.body.name2;
    var roll2 = req.body.roll2;
    var dept2 = req.body.dept2;
    var transaction = req.body.transaction;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var transactionRegex = /^[a-zA-Z0-9]+$/;
  
    if (name1 === "" || roll1 === "" || dept1 === "" || !emailRegex.test(email) || name2 === "" || roll2 === "" || dept2 === "" || (transaction !== "" && !transactionRegex.test(transaction)) || (transaction === "" && file === "")) {
        return res.status(400).send("Please fill in all fields and provide a valid email address and Transaction ID.");
    }
  
    if (transaction !== "" && !transactionRegex.test(transaction)) {
        return res.status(400).send("Please enter a valid transaction ID (alphanumeric characters only).");
    }
    const Contact = mongoose.model("tech", contactSchema);
    const contact = new Contact({
      Name1:name1,
      Roll1:roll1,
      Dept1:dept1,
      Email:email,
      Name2:name2,
      Roll2:roll2,
      Dept2:dept2,
      Transaction:transaction,
    });
    contact.save()
    .then(() => {
        console.log("Successfully saved");
        res.sendStatus(200);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("An error occurred while saving data.");
    });
    
  });
  //get details from the user - quiz
  app.post("/quiz", (req, res)=> {
    var name1 = req.body.name1;
    var roll1 = req.body.roll1;
    var dept1 = req.body.dept1;
    var email = req.body.email;
    var name2 = req.body.name2;
    var roll2 = req.body.roll2;
    var dept2 = req.body.dept2;
    var transaction = req.body.transaction;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var transactionRegex = /^[a-zA-Z0-9]+$/;
    if (name1 === "" || roll1 === "" || dept1 === "" || !emailRegex.test(email) || name2 === "" || roll2 === "" || dept2 === "" || (transaction !== "" && !transactionRegex.test(transaction)) || (transaction === "" && file === "")) {
      return res.status(400).send("Please fill in all fields and provide a valid email address and Transaction ID.");
  }

  if (transaction !== "" && !transactionRegex.test(transaction)) {
      return res.status(400).send("Please enter a valid transaction ID (alphanumeric characters only).");
  }
    const Contact = mongoose.model("quiz", contactSchema);
    const contact = new Contact({
      Name1:name1,
      Roll1:roll1,
      Dept1:dept1,
      Email:email,
      Name2:name2,
      Roll2:roll2,
      Dept2:dept2,
      Transaction:transaction,
    });
    contact.save()
    .then(() => {
        console.log("Successfully saved");
        res.sendStatus(200);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("An error occurred while saving data.");
    });
  });
  //get details from the user - future
  app.post("/future", (req, res)=> {
    var name1 = req.body.name1;
    var roll1 = req.body.roll1;
    var dept1 = req.body.dept1;
    var email = req.body.email;
    var name2 = req.body.name2;
    var roll2 = req.body.roll2;
    var dept2 = req.body.dept2;
    var transaction = req.body.transaction;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var transactionRegex = /^[a-zA-Z0-9]+$/;
    if (name1 === "" || roll1 === "" || dept1 === "" || !emailRegex.test(email) || name2 === "" || roll2 === "" || dept2 === "" || (transaction !== "" && !transactionRegex.test(transaction)) || (transaction === "" && file === "")) {
      return res.status(400).send("Please fill in all fields and provide a valid email address and Transaction ID.");
  }

  if (transaction !== "" && !transactionRegex.test(transaction)) {
      return res.status(400).send("Please enter a valid transaction ID (alphanumeric characters only).");
  }
    const Contact = mongoose.model("future", contactSchema);
    const contact = new Contact({
      Name1:name1,
      Roll1:roll1,
      Dept1:dept1,
      Email:email,
      Name2:name2,
      Roll2:roll2,
      Dept2:dept2,
      Transaction:transaction,
    });
    contact.save();
    console.log("success fully saved");
     // Redirect to index.html after form submission
  });
   //get details from the user - electronics
   app.post("/elec", (req, res)=> {
    var name1 = req.body.name1;
    var roll1 = req.body.roll1;
    var dept1 = req.body.dept1;
    var email = req.body.email;
    var name2 = req.body.name2;
    var roll2 = req.body.roll2;
    var dept2 = req.body.dept2;
    var transaction = req.body.transaction;
    var transaction = req.body.transaction;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var transactionRegex = /^[a-zA-Z0-9]+$/;
    if (name1 === "" || roll1 === "" || dept1 === "" || !emailRegex.test(email) || name2 === "" || roll2 === "" || dept2 === "" || (transaction !== "" && !transactionRegex.test(transaction)) || (transaction === "" && file === "")) {
      return res.status(400).send("Please fill in all fields and provide a valid email address and Transaction ID.");
  }

  if (transaction !== "" && !transactionRegex.test(transaction)) {
      return res.status(400).send("Please enter a valid transaction ID (alphanumeric characters only).");
  }
    const Contact = mongoose.model("elec", contactSchema);
    const contact = new Contact({
      Name1:name1,
      Roll1:roll1,
      Dept1:dept1,
      Email:email,
      Name2:name2,
      Roll2:roll2,
      Dept2:dept2,
      Transaction:transaction,
    });
    contact.save()
    .then(() => {
        console.log("Successfully saved");
        res.sendStatus(200);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("An error occurred while saving data.");
    });
     // Redirect to index.html after form submission
  });
  //get details from the user - datahack
  app.post("/datahack", (req, res)=> {
    var name1 = req.body.name1;
    var roll1 = req.body.roll1;
    var dept1 = req.body.dept1;
    var email = req.body.email;
    var name2 = req.body.name2;
    var roll2 = req.body.roll2;
    var dept2 = req.body.dept2;
    var transaction = req.body.transaction;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var transactionRegex = /^[a-zA-Z0-9]+$/;
    if (name1 === "" || roll1 === "" || dept1 === "" || !emailRegex.test(email) || name2 === "" || roll2 === "" || dept2 === "" || (transaction !== "" && !transactionRegex.test(transaction)) || (transaction === "" && file === "")) {
      return res.status(400).send("Please fill in all fields and provide a valid email address and Transaction ID.");
  }

  if (transaction !== "" && !transactionRegex.test(transaction)) {
      return res.status(400).send("Please enter a valid transaction ID (alphanumeric characters only).");
  }
    const Contact = mongoose.model("datahack", contactSchema);
    const contact = new Contact({
      Name1:name1,
      Roll1:roll1,
      Dept1:dept1,
      Email:email,
      Name2:name2,
      Roll2:roll2,
      Dept2:dept2,
      Transaction:transaction,
    });
    contact.save()
    .then(() => {
        console.log("Successfully saved");
        res.sendStatus(200);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("An error occurred while saving data.");
    });
    // Redirect to index.html after form submission
  });
  //get details from the user - code
  app.post("/code", (req, res)=> {
    var name1 = req.body.name1;
    var roll1 = req.body.roll1;
    var dept1 = req.body.dept1;
    var email = req.body.email;
    var name2 = req.body.name2;
    var roll2 = req.body.roll2;
    var dept2 = req.body.dept2;
    var transaction = req.body.transaction;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var transactionRegex = /^[a-zA-Z0-9]+$/;
    if (name1 === "" || roll1 === "" || dept1 === "" || !emailRegex.test(email) || name2 === "" || roll2 === "" || dept2 === "" || (transaction !== "" && !transactionRegex.test(transaction)) || (transaction === "" && file === "")) {
      return res.status(400).send("Please fill in all fields and provide a valid email address and Transaction ID.");
  }

  if (transaction !== "" && !transactionRegex.test(transaction)) {
      return res.status(400).send("Please enter a valid transaction ID (alphanumeric characters only).");
  }
    const Contact = mongoose.model("code", contactSchema);
    const contact = new Contact({
      Name1:name1,
      Roll1:roll1,
      Dept1:dept1,
      Email:email,
      Name2:name2,
      Roll2:roll2,
      Dept2:dept2,
      Transaction:transaction,
    });
    contact.save()
    .then(() => {
        console.log("Successfully saved");
        res.sendStatus(200);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("An error occurred while saving data.");
    });
    // Redirect to index.html after form submission
  });
   //get details from the user - business
   app.post("/bun", (req, res)=> {
    var name1 = req.body.name1;
    var roll1 = req.body.roll1;
    var dept1 = req.body.dept1;
    var email = req.body.email;
    var name2 = req.body.name2;
    var roll2 = req.body.roll2;
    var dept2 = req.body.dept2;
    var transaction = req.body.transaction;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var transactionRegex = /^[a-zA-Z0-9]+$/;
    if (name1 === "" || roll1 === "" || dept1 === "" || !emailRegex.test(email) || name2 === "" || roll2 === "" || dept2 === "" || (transaction !== "" && !transactionRegex.test(transaction)) || (transaction === "" && file === "")) {
      return res.status(400).send("Please fill in all fields and provide a valid email address and Transaction ID.");
  }

  if (transaction !== "" && !transactionRegex.test(transaction)) {
      return res.status(400).send("Please enter a valid transaction ID (alphanumeric characters only).");
  }
    const Contact = mongoose.model("bun", contactSchema);
    const contact = new Contact({
      Name1:name1,
      Roll1:roll1,
      Dept1:dept1,
      Email:email,
      Name2:name2,
      Roll2:roll2,
      Dept2:dept2,
      Transaction:transaction,
    });
    
    contact.save()
    .then(() => {
        console.log("Successfully saved");
        res.sendStatus(200);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("An error occurred while saving data.");
    });
    // Redirect to index.html after form submission
  });
  //get details from the user - ideathon
  app.post("/ideathon", (req, res)=> {
    var name1 = req.body.name1;
    var roll1 = req.body.roll1;
    var dept1 = req.body.dept1;
    var email = req.body.email;
    var name2 = req.body.name2;
    var roll2 = req.body.roll2;
    var dept2 = req.body.dept2;
    var transaction = req.body.transaction;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var transactionRegex = /^[a-zA-Z0-9]+$/;
    if (name1 === "" || roll1 === "" || dept1 === "" || !emailRegex.test(email) || name2 === "" || roll2 === "" || dept2 === "" || (transaction !== "" && !transactionRegex.test(transaction)) || (transaction === "" && file === "")) {
      return res.status(400).send("Please fill in all fields and provide a valid email address and Transaction ID.");
  }

  if (transaction !== "" && !transactionRegex.test(transaction)) {
      return res.status(400).send("Please enter a valid transaction ID (alphanumeric characters only).");
  }
    const Contact = mongoose.model("ideathon", contactSchema);
    const contact = new Contact({
      Name1:name1,
      Roll1:roll1,
      Dept1:dept1,
      Email:email,
      Name2:name2,
      Roll2:roll2,
      Dept2:dept2,
      Transaction:transaction,
    });
    contact.save()
    .then(() => {
        console.log("Successfully saved");
        openPopup();
        res.sendStatus(200);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("An error occurred while saving data.");
    });
    // Redirect to index.html after form submission
  });

  app.delete('/deleteData/:id', async (req, res) => {
    try {
      const Contact = mongoose.model(req.params.model, contactSchema);
      const deletedData = await Contact.findByIdAndDelete(req.params.id);
      if (!deletedData) {
        return res.status(404).send("Data not found");
      }
      res.send(deletedData);
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while deleting data.");
    }
  });

  
//Login-Schema
const loginSchema = new mongoose.Schema({
  email:  String,
  password:   String ,
});
// Create the Login model

//Login-Validation
app.post('/login', (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  console.log(email, password);
  const Login = mongoose.model('logins', loginSchema);
  Login.findOne({ email: email, password: password })
  
    .then((user) => { 
      if (!user) {
      res.render('login', { error: "User Not Found! Please Register Yourself" });
    } else {
      res.redirect('/details');
    }
    })
    .catch((err) => {
      /*console.error('Failed to find user in MongoDB:', err);
      res.status(500).send('Your Not The Admin Of This Page');*/
      res.redirect('/details');
    });
   
});
//app run
app.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//display the count 
app.get('/Count/paper', async (req, res) => {
  try {
      const Contact = mongoose.model("paper",contactSchema); // Assuming the model name is 'Contact'
      const count_paper = await Contact.countDocuments();
      console.log(`Count Paper: ${count_paper}`);
      res.send(`${count_paper}`);

  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');   
  }
});

app.get('/Count/tech', async (req, res) => {
  try {
      const Contact = mongoose.model("tech",contactSchema); // Assuming the model name is 'Contact'
      const count_tech = await Contact.countDocuments();
      console.log(`Count tech: ${count_tech}`);
      res.send(`${count_tech}`);

  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');   
  }
});

app.get('/Count/bun', async (req, res) => {
  try {
      const Contact = mongoose.model("bun",contactSchema); // Assuming the model name is 'Contact'
      const count_bun = await Contact.countDocuments();
      console.log(`Count tech: ${count_bun}`);
      res.send(`${count_bun}`);

  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');   
  }
});

app.get('/Count/code', async (req, res) => {
  try {
      const Contact = mongoose.model("code",contactSchema); // Assuming the model name is 'Contact'
      const count_code = await Contact.countDocuments();
      console.log(`Count code: ${count_code}`);
      res.send(`${count_code}`);

  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');   
  }
});

app.get('/Count/datahack', async (req, res) => {
  try {
      const Contact = mongoose.model("datahack",contactSchema); // Assuming the model name is 'Contact'
      const count_datahack = await Contact.countDocuments();
      console.log(`Count code: ${count_datahack}`);
      res.send(`${count_datahack}`);

  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');   
  }
});

app.get('/Count/elec', async (req, res) => {
  try {
      const Contact = mongoose.model("elec",contactSchema); // Assuming the model name is 'Contact'
      const count_elec = await Contact.countDocuments();
      console.log(`Count code: ${count_elec}`);
      res.send(`${count_elec}`);

  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');   
  }
});


app.get('/Count/future', async (req, res) => {
  try {
      const Contact = mongoose.model("future",contactSchema); // Assuming the model name is 'Contact'
      const count_future = await Contact.countDocuments();
      console.log(`Count code: ${count_future}`);
      res.send(`${count_future}`);

  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');   
  }
});
app.get('/Count/ideathon', async (req, res) => {
  try {
      const Contact = mongoose.model("ideathon",contactSchema); // Assuming the model name is 'Contact'
      const count_ideathon = await Contact.countDocuments();
      console.log(`Count code: ${count_ideathon}`);
      res.send(`${count_ideathon}`);

  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');   
  }
});
app.get('/Count/quiz', async (req, res) => {
  try {
      const Contact = mongoose.model("quiz",contactSchema); // Assuming the model name is 'Contact'
      const count_quiz= await Contact.countDocuments();
      console.log(`Count code: ${count_quiz}`);
      res.send(`${count_quiz}`);

  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');   
  }
});

//displaying data


app.get('/fetchData/paper', async (req, res) => {
  try {
    const Contact = mongoose.model("paper", contactSchema);
    const data = await Contact.find({});
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching data.");
  }
});

app.get('/fetchData/bun', async (req, res) => {
  try {
    const Contact = mongoose.model("bun", contactSchema);
    const data = await Contact.find({});
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching data.");
  }
});

app.get('/fetchData/code', async (req, res) => {
  try {
    const Contact = mongoose.model("code", contactSchema);
    const data = await Contact.find({});
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching data.");
  }
});


app.get('/fetchData/datahack', async (req, res) => {
  try {
    const Contact = mongoose.model("datahack", contactSchema);
    const data = await Contact.find({});
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching data.");
  }
});

app.get('/fetchData/elec', async (req, res) => {
  try {
    const Contact = mongoose.model("elec", contactSchema);
    const data = await Contact.find({});
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching data.");
  }
});


app.get('/fetchData/future', async (req, res) => {
  try {
    const Contact = mongoose.model("future", contactSchema);
    const data = await Contact.find({});
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching data.");
  }
});


app.get('/fetchData/ideathon', async (req, res) => {
  try {
    const Contact = mongoose.model("ideathon", contactSchema);
    const data = await Contact.find({});
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching data.");
  }
});

app.get('/fetchData/quiz', async (req, res) => {
  try {
    const Contact = mongoose.model("quiz", contactSchema);
    const data = await Contact.find({});
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching data.");
  }
});


app.get('/fetchData/tech', async (req, res) => {
  try {
    const Contact = mongoose.model("tech", contactSchema);
    const data = await Contact.find({});
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching data.");
  }
});

app.delete('/deleteEvent/:eventId', (req, res) => {
  const eventId = req.params.eventId;
  
  Event.deleteOne({ _id: eventId }, (err) => {
      if (err) {
          return res.status(500).send(err.message);
      }
      return res.send('Event deleted successfully');
  });
});



