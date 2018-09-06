import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Nav, {Header} from '../../js/components/header';

storiesOf('Button', module)
  .add('with text', () => (
    <Header/>
  ))
 