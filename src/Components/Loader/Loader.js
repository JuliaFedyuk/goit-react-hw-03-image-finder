import React from 'react';
import { css } from '@emotion/core';
import SyncLoader from 'react-spinners/SyncLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 30px;
  margin-bottom: 30px;
`;

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <SyncLoader
          css={override}
          size={20}
          color={'#303f9f'}
          margin={5}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loader;
