import { createContainer } from 'meteor/react-meteor-data';

import TableRender from './tableRender.jsx';

export default createContainer(({ pNumber }) => {
  Meteor.subscribe('aSearchMP');

  return {
    searchData: LMP.find().fetch(),
  };
}, TableRender);
