
import express, { Express, Request, Response } from 'express';
import videoProcess from "./video"
const constructorMethod = (app: Express) => {
    app.use("/process-video", videoProcess);
    app.use("*", async (req, res) => {
        return res.send("Hello World!")
    })
}

export default constructorMethod;