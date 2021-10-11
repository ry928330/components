/*
 * @Author: ryyyyy
 * @Date: 2021-09-21 11:18:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-11 20:23:12
 * @Description: Do not edit
 * @FilePath: /components/src/index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Demo, Button} from './components';

ReactDOM.render(
  <div>hello, world <Button type={'default'} /></div>,
  document.getElementById('root')
)