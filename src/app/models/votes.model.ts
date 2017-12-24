export interface Votes {
  [movieId: string]: Vote
}

export enum Vote {
  FOR = 'for',
  AGAINST = 'against',
  NEUTRAL = 'neutral'
}