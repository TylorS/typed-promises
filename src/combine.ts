import { Arity2, Arity3, curry3, curry4 } from '167'

import { chain } from './chain'
import { map } from './map'

function _combine2<A, B, C>(f: Arity2<A, B, C>, p1: Promise<A>, p2: Promise<B>): Promise<C> {
  return chain((a: A) => map((b) => f(a, b), p2),  p1)
}

export const combine2: Combine2Arity3 = curry3(_combine2)

export interface Combine2Arity3 {
  <A, B, C>(f: Arity2<A, B, C>, p1: Promise<A>, p2: Promise<B>): Promise<C>
  <A, B, C>(f: Arity2<A, B, C>, p1: Promise<A>): Combine2Arity1<B, C>
  <A, B, C>(f: Arity2<A, B, C>): Combine2Arity2<A, B, C>
}

export interface Combine2Arity2<A, B, C> {
  (p1: Promise<A>, p2: Promise<B>): Promise<C>

  (p1: Promise<A>): Combine2Arity1<B, C>
}

export interface Combine2Arity1<B, C> {
  (p2: Promise<B>): Promise<C>
}

function _combine3<A, B, C, D>(f: Arity3<A, B, C, D>, p1: Promise<A>, p2: Promise<B>, p3: Promise<C>): Promise<D> {
  return chain((a: A) => chain((b: B) => map((c: C) => f(a, b, c), p3), p2), p1)
}

export const combine3: Combine3Arity4 = curry4(_combine3)

export interface Combine3Arity4 {
  <A, B, C, D>(f: Arity3<A, B, C, D>, p1: Promise<A>, p2: Promise<B>, p3: Promise<C>): Promise<D>
  <A, B, C, D>(f: Arity3<A, B, C, D>, p1: Promise<A>, p2: Promise<B>): Combine3Arity1<C, D>
  <A, B, C, D>(f: Arity3<A, B, C, D>, p1: Promise<A>): Combine3Arity2<B, C, D>
  <A, B, C, D>(f: Arity3<A, B, C, D>): Combine3Arity3<A, B, C, D>
}

export interface Combine3Arity3<A, B, C, D> {
  (p1: Promise<A>, p2: Promise<B>, p3: Promise<C>): Promise<D>
  (p1: Promise<A>, p2: Promise<B>): Combine3Arity1<C, D>
  (p1: Promise<A>): Combine3Arity2<B, C, D>
}

export interface Combine3Arity2<B, C, D> {
  (p2: Promise<B>, p3: Promise<C>): Promise<D>
  (p2: Promise<B>): Combine3Arity1<C, D>
}

export interface Combine3Arity1<C, D> {
  (p3: Promise<C>): Promise<D>
}
