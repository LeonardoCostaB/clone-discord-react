import { Router } from "express";
import { ExpressRequestParams } from "./types";

const router = Router();

router.get("/", ({req, res}: ExpressRequestParams) => res.json("OK"))

export default router