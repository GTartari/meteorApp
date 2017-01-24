import { createContainer } from 'meteor/react-meteor-data';

import TableRender from './tableRender.jsx';

export default createContainer(() => {
  Meteor.subscribe('aSearchEq');

  return {
    searchData: LPrecio.find().fetch(),
  };
}, TableRender);
