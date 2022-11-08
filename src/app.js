const express = require("express");
const app = express();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


// middlewares
app.use(express.json());

//Rutas
app.get("/consultar", async (req,res)=>{
    const consultar = await prisma.empleado.findMany();
    res.json({consultar});
});

app.post("/registrar", async (req,res)=>{
    const registrar = await prisma.empleado.create({
        data: req.body,
    })
    res.json({registrar});
});

app.post("/actualizar", async (req,res)=>{
    const actualizar = await prisma.empleado.update({
        where: {
            codigo:7
        },
        data: req.body,
    })
    res.json({actualizar});
});

app.post("/eliminar", async (req,res)=>{
    const eliminar = await prisma.empleado.delete({
        where: {
            codigo_departamento: 20
        },
        data: req.body,
    })
    res.json({eliminar});
});

app.listen(1234,()=>{
    console.log("aplicacion ejecutandose...")
})