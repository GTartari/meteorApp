import { createContainer } from 'meteor/react-meteor-data';

import TableRender from './tableRender.jsx';

export default createContainer(({ pNumber }) => {
  Meteor.subscribe('aSearchFact');

  return {
    searchData: LFact.find().fetch(),
  };
}, TableRender);
