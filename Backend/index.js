const express = require("express");
const cors = require("cors");
require('./connection');
const blogmodel=require('./model')
const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
//Write missing code here

//Write your POST API here

app.get("/get", async (req, res) => {
  try {
    let data = await blogmodel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.post("/add", async (req, res) => {
  try {
    const item = req.body;
    const datasave = new blogmodel(item);
    const saveddata = await datasave.save();
    res.status(200).send({ message: 'Employee Adeed Successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ message: 'Error occurred while saving data' });
  }
});
app.put('/Add/:id',async(req,res)=>{
  try{
      const data=await blogmodel.findByIdAndUpdate(req.params.id,req.body);
      res.send('updated successfully');
  }
  catch(error){
      console.log(error);
  }
})

app.delete('/delete/:id',async(req,res)=>{
  try{
      await blogmodel.findByIdAndDelete(req.params.id);
      res.send('deleted successfully')}
      catch(error){
          console.log(error)
      }
      
  })

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});

