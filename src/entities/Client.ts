import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  Unique,
} from "typeorm";

import State from "./State";
import Lawsuit from "./Lawsuit";

@Entity("client")
@Unique(["cnpj"])
export default class Client {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  cnpj!: string;

  @Column()
  stateId!: number;

  @ManyToOne(() => State, (state) => state.id)
  state!: State;

  @OneToMany(() => Lawsuit, (lawsuit) => lawsuit.clientId)
  lawsuit!: Lawsuit[];
}
