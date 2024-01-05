import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import tbl_book from "./tbl_book";

@Entity({ name: "publisher" })
class publisher {
  @PrimaryGeneratedColumn()
  idx: number;
  @Column({ nullable: false, type: "varchar", length: 255 })
  name: string;
  @OneToMany(() => tbl_book, (book) => book.publisher)
  books: tbl_book[];
}
export default publisher;
