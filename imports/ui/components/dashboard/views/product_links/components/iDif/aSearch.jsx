import { createContainer } from 'meteor/react-meteor-data';

import TableRender from './tableRender.jsx';

export default createContainer(() => {
  Meteor.subscribe('aSearch');

  return {
    searchData: LDif.find().fetch(),
  };
}, TableRender);
