const express = require("express")


const {createClient} = require("@supabase/supabase-js")

const supabase = createClient("https://mxakcphctxajogkuteth.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDE0NTg3OCwiZXhwIjoxOTM1NzIxODc4fQ.0qra9FQYuKCkgMteZ0ZAe2wrMx2v1IFGwsU60Oi4KwY"
  );

const app = express();

app.use(express.json())

const PORT = 3001;

app.post("/createStudent", async (req, res) => {
    console.log(req.body);
    const { data, error } = await supabase.from("studentData").insert([req.body]);
  
    console.log(req.body);
    res.send(console.log(`the user is ${req.body.name}`));
  });

  app.get("/createStudent", async (req, res) => {
    const { data, error } = await supabase.from("studentData").select();
    res.send(data);
  });

  app.put("/UpdateStudent", async (req, res) => {
    const { data, error } = await supabase
  .from("studentData")
  .update({ id : })
  .match({ name : });
  res.send(data);
  });


app.listen(PORT, console.log(`listening on port ${PORT}`))