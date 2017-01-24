import { createContainer } from 'meteor/react-meteor-data';

import TableRender from './tableRender.jsx';

export default createContainer(({ pNumber }) => {
  const { base } = pNumber;
  const { link } = pNumber;
  Meteor.subscribe('lSearch', base, link);
  Meteor.subscribe('lSearch', link, base);

  return {
    searchData: LDif.find().fetch(),
  };
}, TableRender);
