import { BaseQuestion, Default, Message, When } from './base';

/* Editor Question */
export interface EditorQuestion extends BaseQuestion {
  type: 'editor';
  default?: Default<string>;
  filter?: (answer: string) => any | Promise<any>;
  validate?: (answer: string) => boolean | Promise<boolean> | string | Promise<string>;
}

export function editor (name: string, message: Message, options?: {
  when?: When,
  default?: Default<string>;
  filter?: (answer: string) => any | Promise<any>;
  validate?: (answer: string) => boolean | Promise<boolean> | string | Promise<string>
}): EditorQuestion {
  return Object.assign({ type: 'editor' as 'editor', name, message }, options);
}
