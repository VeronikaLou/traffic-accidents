export interface IndividualData {
  readonly name: string | number;
  readonly count: number;
}

export interface AllData {
  readonly year: number;
  readonly alcohol: string;
  readonly day: string;
  readonly deathCount: number;
  readonly mainCause: string;
}
