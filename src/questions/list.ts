import { BaseQuestion, Choices, Default, Separator, Message, When } from './base';

/* List Question */
export interface ListQuestion extends BaseQuestion {
  type: 'list';
  choices: Choices<ListChoices>;
  paginated?: boolean;
  filter?: (answer: any) => any | Promise<any>;
  default?: Default<string | number>;
  pageSize?: number;
}

export type ListChoices = string | ListChoice | Separator

export interface ListChoice {
  name: string;
  value: any;
  short?: string;
}

export function list (name: string, message: Message, choices: Choices<ListChoices>, options?: {
  when?: When;
  paginated?: boolean;
  filter?: (answer: any) => any | Promise<any>;
  default?: Default<string | number>;
  pageSize?: number;
}): ListQuestion {
  return Object.assign({}, { type: 'list' as 'list', name, message, choices }, options);
}
