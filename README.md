# @typed/promises

> A functional promise combinator library

## Get it
```sh
yarn add @typed/promises
# or
npm install -S @typed/promises
```

## API

### Creating Promises

##### `create<A>(f: (x: { resolve: (a: A) => void, reject: (e: Error) => void }) => any): Promise<A>`

Creates a new promise using a user-provided function. A function of arity 1 is used to aid in usage
with functions like `compose` or `pipe`.

```typescript
import { create } from '@typed/promises'

const promise: Promise<number> =
  create(({ resolve, reject }) => setTimout(resolve, 1000, 100))
```

##### `resolved<A>(value: A): Promise<A>`

Creates an already resolved promise with a given value.

```typescript
import { resolved } from '@typed/promises'

const promise: Promise<number> = resolved(1)
```

##### `rejected<E extends Error>(error: E): Promise<never>`

Creates a promise that has already be rejected.

```typescript
import { rejected } from '@typed/promises'

const promise: Promise<never> = rejected(new Error('Oh no!'))
```

### Working with Promises

##### `all(...promises: Array<Promise<any>>): Promise<Array<any>>`

Given `n` number of promises, returns a promise containing an array of resolved values.

```typescript
import { all, resolved } from '@typed/promises'

const promise: Promise<[ number, string ]> = all(resolve(1), resolved('hello'))
```

##### `bimap<A, B>(rejected: (e: Error) => B, resolved: (a: A) => B, promise: Promise<A>): Promise<B>`

Allows dealing with a promise's resolved and rejected states

```typescript
import { resolved, rejected, bimap } from '@typed/promises'

// will call success (2nd) function
const promise: Promise<number> = bimap((e: Error) => 0, (a: number) => a + 10, resolved(1))

// will call rejected (1st) function
const promise: Promise<number> = bimap((e: Error) => 0, (a: number) => a + 10, rejected(new Error('foo')))
```

##### `catchError<E extends Error, A>(f: (e: E) => A, promise: Promise<any>): Promise<A>`

Allows dealing with a rejected promise

```typescript
import { catchError, rejected } from '@typed/promises'

const promise: Promise<number> = catchError((e: Error) => 10, rejected(new Error('foo')))
```

##### `chain<A, B>(f: (a: A) => Promise<B>, promise: Promise<A>): Promise<B>`

Allows creating a new Promise from another promise value

```typescript
import { chain, resolved } from '@typed/promises'

const promise: Promise<string> = chain((x: number) => resolved(String(x)), resolved(10))
```

##### `combine2<A, B, C>(f: (a: A, b: B) => C, p1: Promise<A>, p2: Promise<B>): Promise<C>`

Allows deriving a new promise from 2 resolved promises

```typescript
import { combine2, resolved } from '@typed/promises'

const promise: Promise<string> = combine2((a: number, b: number) => String(a + b), resolved(1), resolved(2))
```

##### `combine3<A, B, C, D>(f: (a: A, b: B, c: C) => D, p1: Promise<A>, p2: Promise<B>, p3: Promise<C>): Promise<D>`

Allows deriving a new promise from 3 resolved promises

```typescript
import { combine3, resolved } from '@typed/promises'

const promise: Promise<string> =
  combine3((a: number, b: number, c: number) => String(a + b + c), resolved(1), resolved(2), resolved(3))
```

##### `map<A, B>(f: (a: A) => B, promise: Promise<A>): Promise<B>`

Allows deriving a new promise from a resolved promise's value

```typescript
import { map, resolved } from '@typed/promises'

const promise: Promise<string> = map(String, resolved(1))
```

##### `timeout<A>(n: number, promise: Promise<A>): Promise<A>`

Given a period of time and a promise, returns a new promise that will
reject if the given promise does not resolve before time given.

```typescript
import { timeout, create } from '@typed/promises'

const p1: Promise<number> = create(({ resolve }) => setTimout(resolve, 2000, 1))

const p2: Promise<number> = timeout(1000, p1) // will reject after 1000ms
```
