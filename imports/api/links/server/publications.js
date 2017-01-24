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

Meteor.publish("aSearch", function () {
  return LDif.find({});
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

Meteor.publish("aSearchEq", function () {
  return LPrecio.find({});
});


//lFact collection
Meteor.publish("pSearchFact.base", function (prodNumber) {
  check(prodNumber, Number);
  return LFact.find({ prdNbrBase: prodNumber });
});

Meteor.publish("pSearchFact.link", function (prodNumber) {
  check(prodNumber, Number);
  return LFact.find({ prdNbrLnk: prodNumber });
});

Meteor.publish("lSearchFact", function (base, link) {
  check(base, Number);
  check(link, Number);
  return LFact.find({ "$and": [
    {prdNbrBase: base},
    {prdNbrLnk: link}
  ]});
});

Meteor.publish("aSearchFact", function () {
  return LFact.find({});
});


//lMP collection
Meteor.publish("pSearchMP.mp", function (prodNumber) {
  check(prodNumber, Number);
  return LMP.find({ prdNbrMP: prodNumber });
});

Meteor.publish("pSearchMP.link", function (prodNumber) {
  check(prodNumber, Number);
  return LMP.find({ prdNbrLnk: prodNumber });
});

Meteor.publish("lSearchMP", function (mp, link) {
  check(mp, Number);
  check(link, Number);
  return LMP.find({ "$and": [
    {prdNbrMP: mp},
    {prdNbrLnk: link}
  ]});
});

Meteor.publish("aSearchMP", function () {
  return LMP.find({});
});
