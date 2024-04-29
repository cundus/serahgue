import { Router } from "express";
import authentication from "../middleware/authentication";
import {
   checkFollowStatus,
   follow,
   getFollowers,
   getFollowings,
} from "../controller/follow";
const followerRouter = Router();

followerRouter.post("/follow", authentication, follow);
followerRouter.get("/check-follow/:id_user", authentication, checkFollowStatus);
followerRouter.get("/follower/:followingId", authentication, getFollowers);
followerRouter.get("/following/:followerId", authentication, getFollowings);

export default followerRouter;
