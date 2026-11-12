//Napraviti rutu GET /zbroj koja prima parametre a i b kroz URL
//primjer /zbroj?a=5&b=15
//cilj je vratiti zbroj

const express=require("express");
const app=express();
const PORT=3000;

app.get("/zbroj", (req,res) =>
{
    const broj1=Number(req.query.a);  //kada URL ima upitnik, koristimo query
    const broj2=Number(req.query.b);

    if ((Number.isNaN(broj1)) || (Number.isNaN(broj2)))
    {
        res.status(400).json({error:"Parametri nisu brojevi"});
    }
    else
    {
        res.json({rezultat:broj1+broj2});
    }
});

app.listen(PORT, ()=>
{
    console.log(`Server radi na portu ${PORT}`)
})