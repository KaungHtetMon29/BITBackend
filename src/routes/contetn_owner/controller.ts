import content_owner from "../../entity/content_owner";
import AppDataSource from "../../db/data-source";
import { Request, Response } from "express";
const corepo = AppDataSource.getRepository(content_owner);
export async function getcontentowners(req: Request, res: Response) {
  const content_owners = await corepo.find();
  return res.status(200).json(content_owners);
}
