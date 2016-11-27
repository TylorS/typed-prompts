import { BaseQuestion, Message, When, Default } from './base';

/* Input Question */
export interface InputQuestion extends BaseQuestion {
  type: 'input';
  filter?: (answer: string) => any | Promise<any>;
  validate?: (answer: string) => boolean | Promise<boolean> | string | Promise<string>;
  default?: Default<string>;
}

export function input (name: string, message: Message, options?: {
  when?: When;
  filter?: (answer: string) => any | Promise<any>;
  validate?: (answer: string) => boolean | Promise<boolean> | string | Promise<string>;
  default?: Default<string>;
}): InputQuestion {
  return Object.assign({}, { type: 'input' as 'input', name, message}, options);
}
