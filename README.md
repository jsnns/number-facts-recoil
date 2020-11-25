# Recoil Demo Projects

Recoil.js demo project. Highlights:

1. Async selectors
2. State with atoms
3. Input controls with atoms

## Points of Interest

- Recoil Atoms in [NumberFactState](src/state/NumberFactState.ts)
- Ease of using async value in [NumberFact](src/components/NumberFact/NumberFact.tsx#L5)

# Findings

### Recoil is far more productive than Redux or Mobx

1. Far less file and context switching. State can be "local" (in the same file) with the owning component and accessed by other components. 
2. There is very little framework-imposed difference between accessing async and sync resources.
3. Typescript is supported "out of the box" removing the overhead of mainting a "global state" type

### Recoil is _better_ for readability than Redux

Recoil's directed-data-flow makes it very easy to read and understand where a piece of data originates and the path it takes.

### Notable feature differences

Redux has a few features that Recoil currently doesn't. However, in practice, I have not seen Redux's exclusive features add much value.

- Full state tracking and state "rewinds"
- Redux debugging tools

These features are possible because of the "signle global source of truth" which is also what makes development more cumbersome.

### Possibel Recoil Pitfalls

Without an established pattern, teams will have to decide where each piece of state, or atom, and selector lives. Without this consistency it could be more difficult to maintain a large project.
