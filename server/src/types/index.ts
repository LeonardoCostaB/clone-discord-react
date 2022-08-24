import { Request, Response } from "express";

export interface ExpressRequestParams {
   req: Request;
   res: Response;
}