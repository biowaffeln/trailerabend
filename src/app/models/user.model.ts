import { Votes } from "./votes.model";

export interface User {
  name: string;
  voted: boolean;
  votes: Votes;
}