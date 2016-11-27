# Typed Prompts

Well-Typed, written in TypeScript, interactive terminal prompts.

This is really just a typed wrapper around the robust library
[inquirer](https://github.com/SBoudrias/Inquirer.js/) with
typings for a TypeScript user like myself. If you don't care for the typings I'd
suggest using inquirer directly.

# Get it

```sh
npm install --save typed-prompts
```

# Basic Usage

```typescript
import { prompt, list } from 'typed-prompts'

interface Answers {
  whatsUp: string;
}

prompt<Answers>([
  list('whatsUp', 'What is up?', [
    'the sky',
    'the stars',
    'the ceiling'
  ])
])
.then((answers) => {
  console.log(answers.whatsUp); // 'the sky'
})
```

# API

#### `prompt<T>(questions: Array<Question>, options?: { stdout: WritableStream, stdin: ReadableStream }): Promise<T>;`

This is the main function exposed by this library. It is responsible for asking your questions.

#### `separator(): Separator`

This creates a separator object to place boundaries in a list of choices for ListQuestion RawListQuestion and CheckboxQuestion.

---
## Convenience Functions

#### `checkbox(name, message, choices[, options]): CheckboxQuestion`
#### `confirm(name, message[, options]): ConfirmQuestion`
#### `editor(name, message, [, options]): EditorQuestion`
#### `expand(name, message, choices[, options]): ExpandQuestion`
#### `input(name, message[, options]): InputQuestion`
#### `list(name, message, choices[, options]): ListQuestion`
#### `password(name, message[, options]): PasswordQuestion`
#### `rawList(name, message, choices[, options]): RawListQuestion`

There are convenience functions `checkbox`, `confirm`, `editor`, `expand`, `input`,
`list`, `password`, and `rawList` to create its corresponding Question object.
Honestly, I'm being a bit lazy at the moment and won't document them to their fullest
just yet because this README would end up large and cluttered with types.
If you're not using TypeScript, I'd suggest still reading the inquirer.js docs and
using it directly, but if you're using TypeScript you'll have great autocompletion
for the type required by each convenience function.
