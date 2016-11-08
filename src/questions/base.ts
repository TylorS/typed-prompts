/* Base types */
export type Choices<T> = Array<T> | ((answers: any) => Array<T> | Promise<T>);

export type Default<T> =
  ((answers: any) => T | Promise<T>) | T;

export type Message =
   ((answers: any) => string | Promise<string>) | string;

export type When =
  ((answers: any) => boolean | Promise<boolean>) | boolean;

export interface Separator {};

export interface BaseQuestion {
  name: string;
  message: Message;
  when?: When;
}
