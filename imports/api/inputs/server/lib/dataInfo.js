DataInfo = new Mongo.Collection("dataInfo");

Meteor.methods({
    'dataInfo.insert'( data ) {

        check(this.userId, String);

        if (! this.userId) {
          throw new Meteor.Error('not-authorized');
        }

        var user = Meteor.user();

        inputData = _.extend( data , {
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

if(Meteor.isServer) {
  Meteor.publish("dataInfo.post", function () {
    return DataInfo.find({userId: this.userId}, {fields: {submitted: 1}});
  });
}
