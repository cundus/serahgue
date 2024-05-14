import { Request, Response } from "express";
import * as userServices from "../service/user";

export const register = async (req: Request, res: Response) => {
   try {
      const { body } = req;

      const result = await userServices.register(body);

      res.json({
         status: true,
         message: "success",
      });
   } catch (error) {
      const err = error as unknown as Error;
      console.log(err);
      if (err.message == "USER_IS_EXIST") {
         return res.status(400).json({
            message: "Udah kepake",
         });
      }

      res.status(500).json({
         status: false,
         message: err.message,
      });
   }
};

export const login = async (req: Request, res: Response) => {
   try {
      const { username, password } = req.body;
      const token = await userServices.login(username, password);

      res.json({
         status: true,
         message: "success",
         data: token,
      });
   } catch (error) {
      const err = error as unknown as Error;
      console.log(err);

      res.status(500).json({
         status: false,
         message: err.message,
      });
   }
};

export const getUsers = async (req: Request, res: Response) => {
   try {
      const condition = req.query;
      const userId = res.locals.user;

      const users = await userServices.getUsers(
         condition as { username: string },
         userId
      );

      res.json({
         status: true,
         message: "success",
         data: users,
      });
   } catch (error) {
      const err = error as unknown as Error;
      console.log(err);

      res.status(500).json({
         status: false,
         message: err.message,
      });
   }
};
