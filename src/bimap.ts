import { Arity1, curry3 } from '167'

function _bimap<A, B, E extends Error = Error>(catchError: Arity1<E, B>, success: Arity1<A, B>, promise: Promise<A>): Promise<B> {
  return promise.then(success, catchError)
}

export const bimap: BimapArity3 = curry3(_bimap)

export interface BimapArity3 {
  <A, B, E extends Error = Error>(catchError: Arity1<E, B>, success: Arity1<A, B>, promise: Promise<A>): Promise<B>
  <A, B, E extends Error = Error>(catchError: Arity1<E, B>, success: Arity1<A, B>): BimapArity1<A, B>
  <B, E extends Error = Error>(catchError: Arity1<E, B>): BimapArity2<B>
}

export interface BimapArity2<B> {
  <A>(success: Arity1<A, B>, promise: Promise<A>): Promise<B>
  <A>(success: Arity1<A, B>): BimapArity1<A, B>
}

export interface BimapArity1<A, B> {
  (promise: Promise<A>): Promise<B>
}
