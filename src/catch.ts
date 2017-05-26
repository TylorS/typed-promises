import { Arity1, curry2 } from '167'

const _catchError =
  <E extends Error, A>(f: Arity1<E, A>, promise: Promise<any>): Promise<A> => promise.catch(f)

export const catchError: CatchError = curry2(_catchError)

export interface CatchError {
  <E extends Error, A>(f: Arity1<E, A>, promise: Promise<any>): Promise<A>
  <E extends Error, A>(f: Arity1<E, A>): (promise: Promise<any>) => Promise<A>
}
