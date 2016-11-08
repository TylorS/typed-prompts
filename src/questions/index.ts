export * from './base';
export * from './checkbox';
export * from './confirm';
export * from './editor';
export * from './expand';
export * from './input';
export * from './list';
export * from './password';
export * from './rawlist';

import { ListQuestion } from './list';
import { RawListQuestion } from './rawlist';
import { ExpandQuestion } from './expand';
import { EditorQuestion } from './editor';
import { CheckboxQuestion } from './checkbox';
import { ConfirmQuestion } from './confirm';
import { InputQuestion } from './input';
import { PasswordQuestion } from './password';

/* Discriminated Union Of Questions */
export type Question =
  ListQuestion |
  RawListQuestion |
  ExpandQuestion |
  CheckboxQuestion |
  ConfirmQuestion |
  InputQuestion |
  PasswordQuestion |
  EditorQuestion;
