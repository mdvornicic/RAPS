const express=require("express");
const app=express();
const PORT=3000;

app.post("/api/ime", (req,res)=>
{
    const ime=req.body.ime;
    res.json({odgovor:`Dobra večer, ${ime}`});
});

app.listen(PORT, ()=>
{
    console.log(`Server radi na portu ${PORT}`);
});