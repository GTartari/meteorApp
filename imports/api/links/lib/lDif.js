LDif = new Mongo.Collection('lDif');

Meteor.methods({
    'difLink.insert'(inputAttributes) {

        check(this.userId, String);
        check(inputAttributes, {
          prdNbrBase: Number,
          prdNbrLnk: Number,
          varPrecio: Number
        });

        if (! this.userId) {
          throw new Meteor.Error('not-authorized');
        }

        var user = Meteor.user();

        var baseLink = LDif.findOne({ "$and": [
          {prdNbrBase:inputAttributes.prdNbrBase},
          {prdNbrLnk:inputAttributes.prdNbrLnk}
        ]});
        var linkBase = LDif.findOne({ "$and": [
          {prdNbrLnk:inputAttributes.prdNbrBase},
          {prdNbrBase:inputAttributes.prdNbrLnk}
        ]});

        if(inputAttributes.prdNbrBase == inputAttributes.prdNbrLnk)
          return 3;

        if (baseLink == null && linkBase == null){
            LDif.insert(inputAttributes);
            return 1;
          } else
            return 2;
    },

    'difLink.eliminar'(linkId) {
        check(linkId, String);
        LDif.remove(linkId);
    }
});
