import './inquirer';
import { createPromptModule, Separator } from 'inquirer';

export * from './questions';

import { Question } from './questions';

export interface PromptFn {
  (questions: Array<Question>): Promise<any>;

  <T>(questions: Array<Question>): Promise<T>;

  (questions: Array<Question>,
   options: { input?: NodeJS.ReadableStream; output?: NodeJS.WritableStream; }): Promise<any>;

  <T>(questions: Array<Question>,
      options: { input?: NodeJS.ReadableStream; output?: NodeJS.WritableStream; }): Promise<T>;
}

// exported functions
export const prompt: PromptFn = function prompt<T>(
    questions: Array<Question>,
    options?: { stdin?: NodeJS.ReadableStream; stdout?: NodeJS.WritableStream; }): Promise<T> {

  const stdio = options || {};
  return createPromptModule({ input: stdio.stdin, output: stdio.stdout })<T>(questions);
};

export function separator (useString?: string): Separator {
  return new Separator(useString);
}
