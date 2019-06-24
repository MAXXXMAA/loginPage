import React, { Fragment } from 'react';
import HomeContent from './HomeContent';

export default function Home() {
  return (
    <Fragment>
      <div className="box cta">
        <p className="has-text-centered">
          <span className="tag is-primary">New</span> product description..details......</p>
      </div>
      <HomeContent />
    </Fragment>
  )
}
