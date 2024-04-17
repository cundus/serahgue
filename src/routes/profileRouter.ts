import { Router } from "express";
import authentication from "../middleware/authentication";
import uploadMiddleware from "../middleware/upload";
import { updateProfile, getProfile } from "../controller/profile";
const profileRouter = Router();

profileRouter.patch(
   "/profile",
   authentication,
   uploadMiddleware("cover"),
   updateProfile
);

profileRouter.get("/profile", authentication, getProfile);

export default profileRouter;
