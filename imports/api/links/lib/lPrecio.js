LPrecio = new Mongo.Collection('lPrecio');

Meteor.methods({
    'eqLink.insert'(inputAttributes) {

        check(this.userId, String);
        check(inputAttributes, {
          prdNbrBase: Number,
          prdNbrLnk: Number
        });

        if (! this.userId) {
          throw new Meteor.Error('not-authorized');
        }

        var user = Meteor.user();

        var baseLink = LPrecio.findOne({ "$and": [
          {prdNbrBase:inputAttributes.prdNbrBase},
          {prdNbrLnk:inputAttributes.prdNbrLnk}
        ]});
        var linkBase = LPrecio.findOne({ "$and": [
          {prdNbrLnk:inputAttributes.prdNbrBase},
          {prdNbrBase:inputAttributes.prdNbrLnk}
        ]});

        if(inputAttributes.prdNbrBase == inputAttributes.prdNbrLnk)
          return 3;

        if (baseLink == null && linkBase == null){
            LPrecio.insert(inputAttributes);
            return 1;
          } else
            return 2;
    }
});
