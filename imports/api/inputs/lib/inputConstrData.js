InputData = new Mongo.Collection('inputConstrData');

Meteor.methods({
    'inputConstrData.insert'(inputAttributes) {

        check(this.userId, String);
        check(inputAttributes, {
            tolerancia: Number,
            posA: Number,
            posB: Number,
            posC: Number,
            posD: Number,
            posE: Number,
            posT: Number
        });

        if (! this.userId) {
          throw new Meteor.Error('not-authorized');
        }

        var user = Meteor.user();       

        inputData = _.extend(inputAttributes, {
            userId: user._id,
            submitted: new Date()
        });

        var userInput = InputData.findOne({userId:user._id});

        if (userInput == null){
            InputData.insert(inputData);
            return 1;
        }else{
            InputData.update(userInput, inputData);
            return 2;
        }
    }
});