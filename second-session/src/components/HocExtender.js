import React from 'react';

import Hoc from './hocs/Hoc';

class HocExtender extends React.Component {
  render() {
    return (
      <div> extender </div>
    )
  }
}

HocExtender = Hoc(HocExtender);

export default HocExtender;