import { Arity1 } from '167'

export const create =
  <A = any, E extends Error = Error>(f: Arity1<{ resolve: Arity1<A, void>, reject: Arity1<E, void> }, any>): Promise<A> =>
    new Promise((resolve, reject) => f({ resolve, reject }))

export const resolve = <A = any>(value: A): Promise<A> => Promise.resolve(value)
export const reject = <E extends Error = Error>(error: E): Promise<never> => Promise.reject(error)
