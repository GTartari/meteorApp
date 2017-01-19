DataInfo = new Mongo.Collection("dataInfo");

Meteor.methods({
    'dataInfo.insert' () {

        check(this.userId, String);

        if (! this.userId) {
          throw new Meteor.Error('not-authorized');
        }

        var user = Meteor.user();

        inputData = {
            userId: user._id,
            submitted: new Date()
        };

        var userInput = DataInfo.findOne({userId:user._id});

        if (userInput == null){
            DataInfo.insert(inputData);
            return 1;
        }else{
            DataInfo.update(userInput, inputData);
            return 2;
        }
    }
});
