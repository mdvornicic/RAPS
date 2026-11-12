const express=require("express");
const app=express();
const PORT=3000;

app.get("/api/pozdrav", (req,res)=>
{
    res.json({poruka:"Hello world"});
});

app.listen(PORT, ()=>
{
    console.log(`Server sluša na portu ${PORT}`);
});