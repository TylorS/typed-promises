import { Arity1, curry2 } from '167'
import { chain } from './chain'
import { map } from './map'

export const ap: Ap = curry2(
  function <A, B>(f: Promise<Arity1<A, B>>, x: Promise<A>): Promise<B> {
    return chain((a) => map((fn) => fn(a), f), x)
  },
)

export interface Ap {
  <A, B>(f: Promise<Arity1<A, B>>, x: Promise<A>): Promise<B>
  <A, B>(f: Promise<Arity1<A, B>>): (x: Promise<A>) => Promise<B>
}
