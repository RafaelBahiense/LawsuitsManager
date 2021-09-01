import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

import Client from "./Client";
import Lawsuit from "./Lawsuit";

@Entity("state")
export default class State {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Client, (client) => client.stateId)
  client!: Client[];

  @OneToMany(() => Lawsuit, (lawsuit) => lawsuit.stateId)
  lawsuit!: Lawsuit[];
}
