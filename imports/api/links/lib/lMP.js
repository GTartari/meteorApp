LMP = new Mongo.Collection('lMP');

Meteor.methods({
    'mPLink.insert'(inputAttributes) {

        check(this.userId, String);
        check(inputAttributes, {
          prdNbrMP: Number,
          prdNbrLnk: Number,
          posN: Number,
          posP: Number
        });

        if (! this.userId) {
          throw new Meteor.Error('not-authorized');
        }

        var user = Meteor.user();

        var mPLink = LMP.findOne({ "$and": [
          {prdNbrMP:inputAttributes.prdNbrMP},
          {prdNbrLnk:inputAttributes.prdNbrLnk}
        ]});
        var linkMP = LMP.findOne({ "$and": [
          {prdNbrLnk:inputAttributes.prdNbrMP},
          {prdNbrMP:inputAttributes.prdNbrLnk}
        ]});

        if(inputAttributes.prdNbrMP == inputAttributes.prdNbrLnk)
          return 3;

        if (mPLink == null && linkMP == null){
            LMP.insert(inputAttributes);
            return 1;
          } else
            return 2;
    }
});
