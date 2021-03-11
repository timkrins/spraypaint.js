// export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
export type DiffCompat<T extends string, U extends string> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T]
export type OmitCompat<T, K> = {
  [P in DiffCompat<Extract<keyof T, string>, Extract<keyof K, string>>]: T[P]
}
