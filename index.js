const express = require("express");
const app= express();

/*
const dotenv = require("dotenv");
dotenv.config();
const db = require("./db/db")
const diraySchema = require("./models/DiarySchema");


const cors = require("cors");
const { default: axios } = require("axios");
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.set("port",process.env.PORT || 5000);
const PORT = app.get("port");

*/





app.get("/",(req,res)=>{
    res.send("000000000")
})

/*
app.get("/diary/list", async (req,res)=>{

    const diaryLIst = await diraySchema.find();
    res.json(diaryLIst);

});

app.post("/diary/insert", async (req,res)=>{
    //const {} = req.body;
    //console.log(req.body);
    //const {author,contents,emotion } = req.body;
    const insertDiary = new diraySchema({...req.body})
    await insertDiary.save();
    res.json({state:"Ok"})

    
})

app.delete("/diary/delete/:id",(req,res)=>{
    console.log(req.params.id);
    const id = req.params.id;
    diraySchema.deleteOne({_id:id})
    .then((response)=>{
        console.log(response);
    })


})


app.put("/diary/modify/:id",(req,res)=>{
    const id = req.params.id;
    const contents = req.body.contents;
    
    diraySchema.updateOne({_id:id},{ $set : {contents:contents} })
    .then((response)=>{
        //console.log(response);
        console.log("update 성공");
    })
    .catch((err)=>{
        console.log(err);
    })
})
*/


app.listen(PORT, ()=>{
    console.log(PORT + " : 포트에서 노드 서버 대기중")
});
