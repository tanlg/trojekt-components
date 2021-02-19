import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextEditor from '../src/TextEditor';

storiesOf('Editor', module).add('TextEditor', () => <TextEditor />);
