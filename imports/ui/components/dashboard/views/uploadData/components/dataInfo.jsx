import React from 'react';
import { compose } from 'react-komposer';

const DataInfoPost = ({info}) => (
  <div>
    <h2>{post.submitted}</h2>
  </div>
);

function infoDataLoader(props, onData) {
  setTimeout(function() {
    const post = {
      id: props.id
    };
    const data = {post};

    onData(null, data)
  }, 1000);
}

const DataInfoPostContainer = compose(infoDataLoader)(DataInfoPost);
