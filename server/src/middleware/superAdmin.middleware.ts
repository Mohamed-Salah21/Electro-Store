import { NextFunction, Response } from "express";
import { AuthenticatedRequest } from "./auth";

export const checkSuperAdmin = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user.role !== "superAdmin") {
    return res.status(403).send({
      error: "Access denied",
    });
  }
  next();
};
