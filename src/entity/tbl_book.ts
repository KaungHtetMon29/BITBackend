import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";
import content_owner from "./content_owner";
import publisher from "./publisher";
import { CONNREFUSED } from "dns";

@Entity({ name: "tbl_book" })
class tbl_book {
  @PrimaryGeneratedColumn({ type: "int", name: "idx", unsigned: true })
  idx: number;

  @Column({ nullable: false, unique: true, type: "varchar", length: 255 })
  book_uniq_idx: string;

  @Column({ nullable: false, type: "varchar", length: 255 })
  bookname: string;

  @Column({ nullable: false, type: "int" })
  co_id: number;

  @ManyToOne(() => content_owner, (contentOwner) => contentOwner.books)
  @JoinColumn({ name: "co_id" })
  content_owner: content_owner;

  @Column({ nullable: false, type: "int" })
  publisher_id: number;

  @ManyToOne(() => publisher, (publisher) => publisher.books)
  @JoinColumn({ name: "publisher_id" })
  publisher: publisher;

  @Column({ nullable: false, type: "text" })
  cover_photo: string;

  @Column({ nullable: false, type: "int" })
  prize: number;

  @Column({ nullable: true, type: "date" })
  created_timetick: Date;
}
export default tbl_book;
