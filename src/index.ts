import express from "express";

const app = express();
app.use(express.json());

app.use('/comics', comicRoutes);
app.use('/customers', comicRoutes);
app.use('/orders', comicRoutes);
app.use('/categories', comicRoutes);
