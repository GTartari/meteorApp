import { createContainer } from 'meteor/react-meteor-data';

import TableRender from './tableRender.jsx';

export default createContainer(({ pNumber }) => {
  const { prodNumber } = pNumber;
  Meteor.subscribe('pSearchEq.base', prodNumber);
  Meteor.subscribe('pSearchEq.link', prodNumber);

  return {
    searchData: LPrecio.find().fetch(),
  };
}, TableRender);
