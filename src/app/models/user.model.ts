import { Votes } from "./votes.model";

export interface User {
  id?: string;
  name: string;
  voted: boolean;
  votes: Votes;
}