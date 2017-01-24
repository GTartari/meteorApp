import { createContainer } from 'meteor/react-meteor-data';

import TableRender from './tableRender.jsx';

export default createContainer(({ pNumber }) => {
  const { prodNumber } = pNumber;
  Meteor.subscribe('pSearchFact.base', prodNumber);
  Meteor.subscribe('pSearchFact.link', prodNumber);

  return {
    searchData: LFact.find().fetch(),
  };
}, TableRender);
