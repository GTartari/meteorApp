import { createContainer } from 'meteor/react-meteor-data';

import TableRender from './tableRender.jsx';

export default createContainer(({ pNumber }) => {
  const { prodNumber } = pNumber;
  Meteor.subscribe('pSearch.base', prodNumber);
  Meteor.subscribe('pSearch.link', prodNumber);

  return {
    searchData: LDif.find().fetch(),
  };
}, TableRender);
