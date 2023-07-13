import { Request, Response } from "express";
import { Section } from "../models/section.model";
import { AuthenticatedRequest } from "../middleware/auth";

const getAllSections = async (req: Request, res: Response) => {
  const sections = await Section.find({});
  if (sections[0]) {
    return res.status(400).send({
      error: "Not Sections yet",
    });
  }
  res.status(200).send({
    success: true,
    message: "sections are fetched successfully",
    sections,
  });
};

const addSection = (req: AuthenticatedRequest, res: Response) => {

};
