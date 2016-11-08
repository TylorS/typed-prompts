import { BaseQuestion, Default, Message, When } from './base';

/* Password Question */
export interface PasswordQuestion extends BaseQuestion {
  type: 'password';
  default?: Default<string>;
  filter?: (answer: string) => any | Promise<any>;
  validate?: (answer: string) => boolean | Promise<boolean> | string | Promise<string>;
}

export function password (name: string, message: Message, options?: {
  when?: When;
  default?: Default<string>;
  filter?: (answer: string) => any | Promise<any>;
  validate?: (answer: string) => boolean | Promise<boolean> | string | Promise<string>;
}): PasswordQuestion {
  return Object.assign({}, { type: 'password' as 'password', name, message }, options);
}
