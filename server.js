const express = require("express");
var mongoose = require('mongoose');
const {mongoURI} = require('./keys/mykey')
const fileupload = require('express-fileupload')

const app = express();

app.use(express.json());

app.use(fileupload());



mongoose
  .connect(mongoURI,{useUnifiedTopology: true , useNewUrlParser: true})
  .then(() => console.log("Mondodb Connected......"))
  .catch(err => console.error(err));

  require('./models/imagemodel')


app.get("/", (req, res) => {
  res.send("Server working 🔥");
});

//upload endpoint
app.post("/upload", (req, res) => {
  if(req.files == null) {
    return(res.status(400).json({msg:'no file uploaded'}))
  }
  const file = req.files.file
  file.mv(`${__dirname}/client/public/uploads/${file.name}`,err=>{
    if(err){
      console.error(err)
      return res.status(500).send(err);
    }
    res.json({fileName:file.name,filePath:`/uploads/${file.name}`})
  })
});

app.use('/',require('./routes/image'))


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port port ${port}`));