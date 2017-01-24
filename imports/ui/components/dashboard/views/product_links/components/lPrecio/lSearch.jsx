import { createContainer } from 'meteor/react-meteor-data';

import TableRender from './tableRender.jsx';

export default createContainer(({ pNumber }) => {
  const { base } = pNumber;
  const { link } = pNumber;
  Meteor.subscribe('lSearchEq', base, link);
  Meteor.subscribe('lSearchEq', link, base);

  return {
    searchData: LPrecio.find().fetch(),
  };
}, TableRender);
