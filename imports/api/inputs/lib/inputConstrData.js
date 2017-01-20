InputConstrData = new Mongo.Collection('inputConstrData');

Meteor.methods({
    'inputConstrData.insert'(inputAttributes) {

        check(this.userId, String);
        check(inputAttributes, {
            movPrecios: Number,
            posXProd: Number,
            varMaxA: Number,
            varMaxB: Number,
            varMaxC: Number,
            varMaxD: Number,
            varMaxE: Number,
            varMaxNC: Number
        });

        if (! this.userId) {
          throw new Meteor.Error('not-authorized');
        }

        var user = Meteor.user();

        inputData = _.extend(inputAttributes, {
            userId: user._id,
            submitted: new Date()
        });

        var userInput = InputConstrData.findOne({userId:user._id});

        if (userInput == null){
            InputConstrData.insert(inputData);
            return 1;
        }else{
            InputConstrData.update(userInput, inputData);
            return 2;
        }
    }
});
