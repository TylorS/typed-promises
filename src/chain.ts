import { Arity1, curry2 } from '167'

const _chain = <A, B>(f: Arity1<A, Promise<B>>, promise: Promise<A>): Promise<B> => promise.then(f)

export const chain: ChainArity2 = curry2(_chain) as ChainArity2

export interface ChainArity2 {
  <A, B>(f: Arity1<A, Promise<B>>, promise: Promise<A>): Promise<B>

  <A, B>(f: Arity1<A, Promise<B>>): ChainArity1<A, B>
}

export interface ChainArity1<A, B> {
  (promise: Promise<A>): Promise<B>
}
