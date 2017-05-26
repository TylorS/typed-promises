import { Arity1, curry2 } from '167'

const _map = <A, B>(f: Arity1<A, B>, promise: Promise<A>): Promise<B> => promise.then(f)

export const map: MapArity2 = curry2(_map) as MapArity2

export interface MapArity2 {
  <A, B>(f: Arity1<A, B>, promise: Promise<A>): Promise<B>

  <A, B>(f: Arity1<A, B>): MapArity1<A, B>
}

export interface MapArity1<A, B> {
  (promise: Promise<A>): Promise<B>
}
