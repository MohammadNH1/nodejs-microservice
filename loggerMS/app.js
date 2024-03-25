const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Producer = require("./producer");
const producer = new Producer();

app.use(bodyParser.json("application/json"));

app.post("/logger/sendLog", async (req, res, next) => {
  await producer.publishMessage(req.body.logType, req.body.message);
  res.send();
});

app.get('/logger',(req,res)=>{
  res.send("hello from logger server!")

})




const port = 3001
app.listen(port, () => {
  console.log(`Logger Server started on port ${port}`);
});