import { Vote } from "./votes.model";

export interface Movie {
  id?: string;
  name: string;
  year: number;
  trailerlink: string;
  special: string;
}

export interface VoteMovie extends Movie {
  vote: Vote;
}

export interface ResultsMovie extends Movie {
  results: {
    for: number;
    against: number;
    neutral: number;
  }
}