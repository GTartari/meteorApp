//lDif collection
Meteor.publish("pSearch.base", function (prodNumber) {
  check(prodNumber, Number);
  return LDif.find({ prdNbrBase: prodNumber });
});

Meteor.publish("pSearch.link", function (prodNumber) {
  check(prodNumber, Number);
  return LDif.find({ prdNbrLnk: prodNumber });
});

Meteor.publish("lSearch", function (base, link) {
  check(base, Number);
  check(link, Number);
  return LDif.find({ "$and": [
    {prdNbrBase: base},
    {prdNbrLnk: link}
  ]});
});

//lPrecio collection
Meteor.publish("pSearchEq.base", function (prodNumber) {
  check(prodNumber, Number);
  return LPrecio.find({ prdNbrBase: prodNumber });
});

Meteor.publish("pSearchEq.link", function (prodNumber) {
  check(prodNumber, Number);
  return LPrecio.find({ prdNbrLnk: prodNumber });
});

Meteor.publish("lSearchEq", function (base, link) {
  check(base, Number);
  check(link, Number);
  return LPrecio.find({ "$and": [
    {prdNbrBase: base},
    {prdNbrLnk: link}
  ]});
});
