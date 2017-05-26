import { eq, rejects } from '@briancavalier/assert'

import { timeout } from './timeout'

describe(`timeout`, () => {
  it(`returns a rejected promise given a promise that doesn't resolve`, () => {
    const promise =
      timeout(10, new Promise((resolve) => setTimeout(resolve, 5000)))

    return rejects(promise)
  })

  it(`returns a fulfilled promise given a promise that resolves`, () => {
    const promise = timeout(100, Promise.resolve(1))

    return promise.then(eq(1))
  })
})
