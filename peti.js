//Preuzeti vic sa stranice chuck norris vicevi

const express=require("express");
const app=express();
const PORT=3000;

const axios=require("axios");

app.get("/", (req,res)=>
{
    res.send("Ako želite vic o Chuck Norrisu, upišite localhost:3000/chuck");
});

app.get("/chuck", async(req,res)=>
{
    try
    {
        const odgovor=await axios.get("https://api.chucknorris.io/jokes/random");
        res.json({sala:odgovor.data.value});
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