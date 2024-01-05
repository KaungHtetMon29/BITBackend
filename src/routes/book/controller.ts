import AppDataSource from "../../db/data-source";

import { Request, Response } from "express";
import bookinput from "./model";
import tbl_book from "../../entity/tbl_book";
import content_owner from "../../entity/content_owner";
import publisher from "../../entity/publisher";
import { DeepPartial } from "typeorm";

const bookrepo = AppDataSource.getRepository(tbl_book);
const corepo = AppDataSource.getRepository(content_owner);
const prepo = AppDataSource.getRepository(publisher);

export async function findonebook(req: Request, res: Response) {
  console.log(req.params.bid);
  try {
    const datab = await bookrepo
      .createQueryBuilder("book")
      .innerJoinAndSelect("book.content_owner", "content_owner")
      .innerJoinAndSelect("book.publisher", "publisher")
      .select([
        "book.idx",
        "book.book_uniq_idx",
        "book.bookname",
        "book.prize",
        "content_owner.name",
        "publisher.name",
        "book.cover_photo",
      ])
      .where(`book.book_uniq_idx = '${req.params.bid}'`)
      .getOne();
    return res.status(200).json(datab);
  } catch (error) {
    console.log(error);
  }
}

export async function updatebook(req: Request, res: Response) {
  const date = new Date();
  console.log(date);
  const bdy: bookinput = req.body;
  console.log(bdy);
  try {
    const cownerid = await corepo.findOne({
      where: { name: bdy.contentowner },
    });
    const pid = await prepo.findOne({
      where: { name: bdy.publisher },
    });

    await bookrepo.update(
      { book_uniq_idx: bdy.bprevid },
      {
        book_uniq_idx: bdy.bookuniqid,
        co_id: cownerid.idx,
        bookname: bdy.bookname,
        publisher_id: pid.idx,
        prize: bdy.prize,
        cover_photo: bdy.coverphoto,
        created_timetick: date,
      }
    );
    return res.status(200).json("success");
  } catch (error) {
    console.log(error);
  }
}
export async function addbook(req: Request, res: Response) {
  const date = new Date();
  console.log(date);
  const bdy: bookinput = req.body;
  console.log(bdy.publisher);
  try {
    const cownerid = await corepo.findOne({
      where: { name: bdy.contentowner },
    });
    const pid = await prepo.findOne({
      where: { name: bdy.publisher },
    });
    if (cownerid === null) {
      throw new Error("No owner Found");
    }
    if (pid === null) {
      throw new Error("No Publisher Found");
    }
    const addbook = bookrepo.create({
      book_uniq_idx: bdy.bookuniqid,
      co_id: cownerid.idx,
      bookname: bdy.bookname,
      publisher_id: pid.idx,
      prize: bdy.prize,
      cover_photo: bdy.coverphoto,
      created_timetick: date,
    } as DeepPartial<tbl_book>);
    await bookrepo.insert(addbook);
    return res.status(200).json("success");
  } catch (error) {
    let statuscode = 500;
    if (
      error.message === "No owner Found" ||
      error.message === "No Publisher Found"
    ) {
      statuscode = 404;
    }
    console.error("Error adding book:", error);
    return res.status(statuscode).json({ error: error.message });
  }
}

export async function deletebook(req: Request, res: Response) {
  console.log(req.params.id);
  try {
    const data = await bookrepo.findOne({
      where: { idx: req.params.id },
    });
    if (data === null) {
      throw new Error("No Book Found");
    }
    console.log(data);
    await bookrepo.remove(data);

    return res.status(200).json("success");
  } catch (error) {
    let statuscode = 500;
    if (error.message === "No Book Found") {
      statuscode = 404;
    }
    return res.status(statuscode).json({ error: error.message });
  }
}

export async function getbook(req: Request, res: Response) {
  try {
    const data = await bookrepo.find();
    const test = await bookrepo
      .createQueryBuilder("book")
      .innerJoinAndSelect("book.content_owner", "content_owner")
      .innerJoinAndSelect("book.publisher", "publisher")
      .select([
        "book.idx",
        "book.created_timetick",
        "book.book_uniq_idx",
        "book.bookname",
        "content_owner.name",
        "publisher.name",
        "book.cover_photo",
      ])
      .getMany();
    return res.json(test);
  } catch (error) {
    console.error("Error adding book:", error);
  }
}
