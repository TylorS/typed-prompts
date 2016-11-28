import { BaseQuestion, Choices, Separator, Message, When } from './base';

/* Raw List Question */
export interface RawListQuestion extends BaseQuestion {
  type: 'rawlist';
  choices: Choices<string | Separator>;
  filter?: (answer: any) => any | Promise<any>;
  pageSize?: number;
}

export function rawList (name: string, message: Message, choices: Choices<string | Separator>, options?: {
  when?: When;
  filter?: (answer: any) => any | Promise<any>;
  pageSize?: number;
}): RawListQuestion {
  return Object.assign({}, { type: 'rawlist' as 'rawlist', name, message, choices }, options);
}
