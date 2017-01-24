LFact = new Mongo.Collection('lFact');

Meteor.methods({
    'factLink.insert'(inputAttributes) {

        check(this.userId, String);
        check(inputAttributes, {
          prdNbrBase: Number,
          prdNbrLnk: Number,
          fact: Number
        });

        if (! this.userId) {
          throw new Meteor.Error('not-authorized');
        }

        var user = Meteor.user();

        var baseLink = LFact.findOne({ "$and": [
          {prdNbrBase:inputAttributes.prdNbrBase},
          {prdNbrLnk:inputAttributes.prdNbrLnk}
        ]});
        var linkBase = LFact.findOne({ "$and": [
          {prdNbrLnk:inputAttributes.prdNbrBase},
          {prdNbrBase:inputAttributes.prdNbrLnk}
        ]});

        if(inputAttributes.prdNbrBase == inputAttributes.prdNbrLnk)
          return 3;

        if (baseLink == null && linkBase == null){
            LFact.insert(inputAttributes);
            return 1;
          } else
            return 2;
    }
});
