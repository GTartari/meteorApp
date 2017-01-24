import { createContainer } from 'meteor/react-meteor-data';

import TableRender from './tableRender.jsx';

export default createContainer(({ pNumber }) => {
  const { base } = pNumber;
  const { link } = pNumber;
  Meteor.subscribe('lSearchFact', base, link);
  Meteor.subscribe('lSearchFact', link, base);

  return {
    searchData: LFact.find().fetch(),
  };
}, TableRender);
