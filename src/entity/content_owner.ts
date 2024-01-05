import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import tbl_book from "./tbl_book";

@Entity({ name: "content_owner" })
class content_owner {
  @PrimaryGeneratedColumn()
  idx: number;
  @Column({ nullable: false, type: "varchar", length: 255 })
  name: string;
  @OneToMany(() => tbl_book, (book) => book.content_owner)
  books: tbl_book[];
}
export default content_owner;
