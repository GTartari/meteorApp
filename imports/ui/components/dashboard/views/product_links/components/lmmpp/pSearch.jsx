import { createContainer } from 'meteor/react-meteor-data';

import TableRender from './tableRender.jsx';

export default createContainer(({ pNumber }) => {
  const { prodNumber } = pNumber;
  Meteor.subscribe('pSearchMP.mp', prodNumber);
  Meteor.subscribe('pSearchMP.link', prodNumber);

  return {
    searchData: LMP.find().fetch(),
  };
}, TableRender);
