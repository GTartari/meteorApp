InputObjData = new Mongo.Collection('inputObjData');

Meteor.methods({
	'inputObjData.insert'(inputAttributes) {

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

		var userInput = InputObjData.findOne({userId:user._id});

		if (userInput == null){
			InputObjData.insert(inputData);
			return 1;
		}else{
			InputObjData.update(userInput, inputData);
			return 2;
		}
	}
});
