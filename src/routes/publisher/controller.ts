import publisher from "../../entity/publisher";
import AppDataSource from "../../db/data-source";
import { Request, Response } from "express";
const prepo = AppDataSource.getRepository(publisher);
export async function getpublishers(req: Request, res: Response) {
  const content_owners = await prepo.find();
  return res.status(200).json(content_owners);
}
