export const all: All = (...args: Array<any>) => Promise.all(args)

export interface All {
  <A>(p1: Promise<A>): Promise<[A]>
  <A, B>(p1: Promise<A>, p2: Promise<B>): Promise<[A, B]>
  <A, B, C>(p1: Promise<A>, p2: Promise<B>, p3: Promise<C>): Promise<[A, B, C]>
  <A, B, C, D>(p1: Promise<A>, p2: Promise<B>, p3: Promise<C>, p4: Promise<D>): Promise<[A, B, C, D]>
  <A, B, C, D, E>(p1: Promise<A>, p2: Promise<B>, p3: Promise<C>, p4: Promise<D>, p5: Promise<E>): Promise<[A, B, C, D, E]>
  <A, B, C, D, E, F>(p1: Promise<A>, p2: Promise<B>, p3: Promise<C>, p4: Promise<D>, p5: Promise<E>, p6: Promise<F>): Promise<[A, B, C, D, E, F]>
  <A, B, C, D, E, F, G>(p1: Promise<A>, p2: Promise<B>, p3: Promise<C>, p4: Promise<D>, p5: Promise<E>, p6: Promise<F>, p7: Promise<G>): Promise<[A, B, C, D, E, F, G]>
  <A, B, C, D, E, F, G, H>(p1: Promise<A>, p2: Promise<B>, p3: Promise<C>, p4: Promise<D>, p5: Promise<E>, p6: Promise<F>, p7: Promise<G>, p8: Promise<H>): Promise<[A, B, C, D, E, F, G, H]>
  <A, B, C, D, E, F, G, H, I>(p1: Promise<A>, p2: Promise<B>, p3: Promise<C>, p4: Promise<D>, p5: Promise<E>, p6: Promise<F>, p7: Promise<G>, p8: Promise<H>, p9: Promise<I>): Promise<[A, B, C, D, E, F, G, H, I]>

  <A extends Array<any> = Array<any>>(...args: Array<Promise<any>>): Promise<A>
}
