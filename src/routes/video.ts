import express, { Express, Request, Response, Router } from 'express';
import ffmpeg from "fluent-ffmpeg";
const router = Router()

router.route("/").get(async (req, res) => {
    return res.send("woighowinhgoihu");
})

export default router;