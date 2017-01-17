InputData = new Mongo.Collection('inputOtrosData');

Meteor.methods({
	'inputOtrosData.insert'(inputAttributes) {

		check(this.userId, String);
		check(inputAttributes, {
			solver: String,
			log: Boolean,
			round: Boolean,
			sb: Boolean,
			links: Boolean,
			precios: Boolean
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
