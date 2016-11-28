import { BaseQuestion, Choices, Default, Message, When } from './base';

/* Checkbox Question */
export interface CheckboxQuestion extends BaseQuestion {
  type: 'checkbox';
  choices: Choices<{ name: string, value?: any, checked?: boolean, disabled?: any }>;
  filter?: (answer: any) => any | Promise<any>;
  validate?: (answer: any) => boolean | Promise<boolean> | string | Promise<string>;
  default?: Default<Array<any>>;
  pageSize?: number;
}

export function checkbox(
  name: string,
  message: Message,
  choices: Choices<{ name: string, value?: any, checked?: boolean, disabled?: any }>,
  options?: {
    when?: When,
    filter?: (answer: any) => any | Promise<any>;
    validate?: (answer: any) => boolean | Promise<boolean> | string | Promise<string>;
    default?: Default<Array<any>>;
    pageSize?: number;
  }
): CheckboxQuestion {
  return Object.assign({}, { type: 'checkbox' as 'checkbox', name, message, choices }, options);
}
