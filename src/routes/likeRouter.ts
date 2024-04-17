import { Router } from "express";
import authentication from "../middleware/authentication";
import uploadMiddleware from "../middleware/upload";
import { createLike, getLikes } from "../controller/like";
const likeRouter = Router();

likeRouter.post("/like", authentication, createLike);
likeRouter.get("/likes/:threadId", authentication, getLikes);

export default likeRouter;
