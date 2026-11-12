const express=require("express");
const app=express();
const PORT=3000;

const axios=require("axios");

app.get("/", (req,res)=>
{
    res.send("Ako želite vic, upišite localhost:3000/vic");
});

app.get("/vic", async(req,res)=>
{
    try
    {
        const odgovor=await axios.get("https://v2.jokeapi.dev/joke/Any?format=json");
        res.json({sala1:odgovor.data.setup, sala2:odgovor.data.delivery});
    }
    catch(error)
    {
        res.status(500).json({error:"Dogodila se pogreška"});
    }
});

app.listen(PORT, ()=>
{
    console.log(`Server radi na portu ${PORT}`);
});