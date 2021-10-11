/*
 * @Author: ryyyyy
 * @Date: 2021-09-21 10:15:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-11 20:09:52
 * @Description: Do not edit
 * @FilePath: /components/src/components/demo/index.tsx
 */
import * as React from 'react';
import {tuple} from '../../_utils/type';

export interface DemoProps {name: string}
export default (props: DemoProps) => {
  const ButtonTypes = tuple('default', 'primary', 'text', 'link');
  type ButtonType = typeof ButtonTypes[number];
  const button1: ButtonType = 'default';
  console.log(ButtonTypes, 23333)
  const {name} = props;
  return <div>{name}</div>
}

