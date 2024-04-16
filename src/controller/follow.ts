import { Request, Response } from "express";
import prisma from "../db";

export const follow = async (req: Request, res: Response) => {
   try {
      console.log(req.body);
      const { followerId, followingId } = req.body;

      const follow = await prisma.follow.create({
         data: {
            followerId,
            followingId,
         },
      });

      console.log(follow);

      res.json({
         success: true,
         data: follow,
      });
   } catch (error) {
      console.log(error);

      res.status(500).json({
         success: false,
         error: error,
      });
   }
};

export const getFollowers = async (req: Request, res: Response) => {
   try {
      const { followingId } = req.params;

      const followers = await prisma.follow.findMany({
         where: {
            followingId: +followingId,
         },
      });

      res.json({
         success: true,
         data: followers,
      });
   } catch (error) {
      res.status(500).json({
         success: false,
         error: error,
      });
   }
};
