import { BaseQuestion, Default, Separator, Message, When } from './base';

/* Expand Question */
export type ExpandChoices =
  Array<{ key: string; name: string; value: any; } | Separator>;

export interface ExpandQuestion extends BaseQuestion {
  type: 'expand';
  choices: ExpandChoices;
  default?: Default<number>;
  pageSize?: number;
}

export function expand (name: string, message: Message, choices: ExpandChoices, options?: {
  when?: When;
  default?: Default<number>;
  pageSize?: number;
}): ExpandQuestion {
  return Object.assign({}, { type: 'expand' as 'expand', name, message, choices }, options);
}
