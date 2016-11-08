import { BaseQuestion, Default, Message, When } from './base';

/* Confirm Question */
export interface ConfirmQuestion extends BaseQuestion {
  type: 'confirm';
  default?: Default<boolean>;
}

export function confirm (name: string, message: Message, options?: {
  when?: When,
  default?: Default<boolean>;
}): ConfirmQuestion {
  return Object.assign({}, { type: 'confirm' as 'confirm', name, message }, options);
}
