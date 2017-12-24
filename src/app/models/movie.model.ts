import { Vote } from "./votes.model";

export interface Movie {
  id?: string;
  name: string;
  trailerlink: string;
}

export interface MovieVote extends Movie {
  vote: Vote;
}