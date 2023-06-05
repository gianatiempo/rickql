# RickQL

## Installation

After cloning the repository, execute the following command (this will install all dependencies)

```
yarn
```

Then, you are ready to start the applications with:

```
yarn dev
```

## Testing

You can run

```
yarn test
```

to run test locally (mocked data) or:

```
yarn coverage
```

to check coverage, you will see something like:

```
 ✓ src/pages/CharactersListPage/CharactersListPage.test.tsx (2) 2806ms
 ✓ src/App.test.tsx (1) 2331ms
 ✓ src/components/AppLayout/AppLayout.test.tsx (3) 2511ms
 ✓ src/pages/CharactersInfoPage/CharactersInfoPage.test.tsx (4) 4989ms

 Test Files  4 passed (4)
      Tests  10 passed (10)
   Start at  22:13:55
   Duration  9.04s (transform 257ms, setup 1.77s, collect 10.85s, tests 12.64s, environment 1.40s, prepare 342ms)

 % Coverage report from istanbul
------------------------------|---------|----------|---------|---------|-------------------
File                          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------------------|---------|----------|---------|---------|-------------------
All files                     |     100 |    73.07 |     100 |     100 |
 src                          |     100 |      100 |     100 |     100 |
  App.tsx                     |     100 |      100 |     100 |     100 |
 src/components               |     100 |      100 |     100 |     100 |
  ErrorFallback.tsx           |     100 |      100 |     100 |     100 |
  Loading.tsx                 |     100 |      100 |     100 |     100 |
 src/components/AppLayout     |     100 |      100 |     100 |     100 |
  AppLayout.tsx               |     100 |      100 |     100 |     100 |
 src/pages/CharactersInfoPage |     100 |       75 |     100 |     100 |
  CharactersInfoPage.tsx      |     100 |       75 |     100 |     100 | 33,41-56
 src/pages/CharactersListPage |     100 |       70 |     100 |     100 |
  CharactersListPage.tsx      |     100 |       70 |     100 |     100 | 20-29
------------------------------|---------|----------|---------|---------|-------------------
✨  Done in 10.07s.
```
