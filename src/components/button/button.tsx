/*
 * @Author: ryyyyy
 * @Date: 2021-10-11 20:13:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-12 10:09:48
 * @Description: Do not edit
 * @FilePath: /components/src/components/button/button.tsx
 */
import * as React from 'react';
import {tuple} from '../../_utils/type';

const ButtonTypes = tuple('default', 'solid', 'link', 'text', 'primary');
export type ButtonType = typeof ButtonTypes[number];

export interface ButtonProps{
  type?: ButtonType
}

export default (props: ButtonProps) => {
  return <div>button</div>
}