require("dotenv").config();
const express = require("express")
const token = process.env.API_TOKEN;
// console.log(token)
const supaURL = process.env.URL

const {createClient} = require("@supabase/supabase-js");
const supaBase = createClient(supaURL, token);

const app = express()
const PORT = 3001;

app.use(express.json());

//Route for posting one new stock type
app.post("/addStock", async (req, res) => {
    const { data, error } = await supaBase.from("Stock_Information").insert([req.body]);
    res.send(console.log(`the stock ${req.body} has been added`));
});
//Route for posting multiple new stock types
app.post("/addStock", async (req, res) => {
    const { data, error } = await supaBase.from("Stock_Information").insert(req.body);
    res.send(console.log(`the stock ${req.body} has been added`));
});
//Route to get all stock info
app.get("/getStock", async (req, res) =>{
    const { data, error } = await supaBase.from("Stock_Information").select();
    res.send(data);
    console.log("Stock are up")
});
// Route to get specific stock information
app.get("/getStock", async (req, res) =>{
    const { data, error } = await supaBase.from("Stock_Information").select(`name, ticker`);
    res.send(data);
    console.log("Here's your stock info")
});
// Route to get one specific stock
app.get("/getThisStock", async (req, res) =>{
    const id = req.params.id;
    const { data, error } = await supaBase
    .from("Stock_Information")
    .select()
    .match({ id:4 })
    res.send(data);
    console.log("Here's your stock info")
});
//Route to update existing stock info
app.put("/updateStock/:name", async (req, res) =>{
    const name = req.params.name;
    const { data, error } = await supaBase
    .from("Stock_Information")
    .update(req.body)
    .match({ name : name })
    console.log(name)
    res.send(data);
    console.log(`Your stock ${data} has been updated`)
});


app.listen(PORT, console.log(`Listening on port ${PORT}`))