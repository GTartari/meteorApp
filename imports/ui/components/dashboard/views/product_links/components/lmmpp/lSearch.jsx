import { createContainer } from 'meteor/react-meteor-data';

import TableRender from './tableRender.jsx';

export default createContainer(({ pNumber }) => {
  const { mP } = pNumber;
  const { link } = pNumber;
  Meteor.subscribe('lSearchMP', mP, link);
  Meteor.subscribe('lSearchMP', link, mP);

  return {
    searchData: LMP.find().fetch(),
  };
}, TableRender);
