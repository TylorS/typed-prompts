// not entirely correct or exhaustive typings for enquirer
// just enough to make this library work :)
declare module 'inquirer' {
  export function createPromptModule(
    options?: {
      input?: NodeJS.ReadableStream;
      output?: NodeJS.WritableStream; }): <T>(questions: Array<any>) => Promise<T>;

  export class Separator {
    constructor(separator?: string)
  }
}
