// export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
export type DiffCompat<T extends string, U extends string> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T]
// for TS < 3.5
export type OmitCompat<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
