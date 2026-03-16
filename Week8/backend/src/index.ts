// import express from 'express';

// const app = express();
// const port = process.env.PORT || 8080;

// app.use(express.json());

// app.get('/',(req,res) => {
//     res.send('Hello from Prisma AP!');
// });

// app.listen(port,() =>{
//    console.log(`Sever is runing on http://localhost:${port}`);
    
// });

import  express  from "express";
import {prisma} from '../lib/prisma'

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

//create book
app.post('api/book',async(req,res) => {
    const{title,author,description,price} = req.body;
    try{
        const book = await prisma.book.create({
            data:{
                title,
                author,
                description,
                price,
            },
        });
        res.status(201).json(book);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error:'An eroor occueewd while creating the book'});
    }
});
app.get('api/books/:id',async(req,res)=>{
    const{id} = req.params;
    try{
        const book = await prisma.book.findUnique({
            where:{bookId:id},
        });
        if(book){
            res.json(book);
        }else{
            res.status(404).json({error:'Book not found.'});
        }
    }
})