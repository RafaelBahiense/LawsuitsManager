import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
} from "typeorm";

import State from "./State";
import Client from "./Client";

@Entity("lawsuit")
@Unique(["number"])
export default class Lawsuit {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  clientId!: string;

  @ManyToOne(() => Client, (client) => client.id)
  client!: Client;

  @Column()
  stateId!: string;

  @ManyToOne(() => State, (state) => state.id)
  state!: State;

  @Column()
  number!: string;

  @Column()
  value!: number;

  @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date;

  @Column()
  status!: boolean;
}
