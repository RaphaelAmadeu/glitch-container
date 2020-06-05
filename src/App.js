import React from 'react';

import {
  LinkWithIcon
} from '@carbon/ibmdotcom-react';
import { ArrowRight20 } from '@carbon/icons-react';

import './styles.scss';
function App() {
  return (
    <div>
      <LinkWithIcon href="https://www.example.com">
        <span>Lorem ipsum dolor</span>
        <ArrowRight20 />
      </LinkWithIcon>
    </div>
  );
}

export default App;
