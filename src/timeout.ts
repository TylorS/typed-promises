import { create } from './create'
import { curry2 } from '167'

declare function setTimeout(f: (...args: Array<any>) => any, time: any, ...args: Array<any>): number
declare function clearTimeout(id: number): void

export const timeout: Timeout = curry2(_timeout)

export interface Timeout {
  <A>(time: number, promise: Promise<A>): Promise<A>
  <A>(time: number): (promise: Promise<A>) => Promise<A>
}

function _timeout<A>(time: number, promise: Promise<A>): Promise<A> {
  return create<A>(({ resolve, reject }) => {
    const id = setTimeout(() => {
      reject(new Error(`Timed out after ${time} seconds`))

      clearTimeout(id)
    }, time)

    promise.then(
      (value: A) => {
        clearTimeout(id)
        resolve(value)
      },
      reject
    )
  })
}

