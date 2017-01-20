Meteor.publish("inputConstrInfo", function () {
  var currentUserId = this.userId;
  return InputConstrData.find({ userId: currentUserId });
});

Meteor.publish("inputObjInfo", function () {
  var currentUserId = this.userId;
  return InputObjData.find({ userId: currentUserId });
});

Meteor.publish("inputOtrosInfo", function () {
  var currentUserId = this.userId;
  return InputData.find({ userId: currentUserId });
});
