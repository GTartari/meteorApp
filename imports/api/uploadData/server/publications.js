Meteor.publish("dataInfo.subm", function () {
  var currentUserId = this.userId;
  return DataInfo.find({ userId: currentUserId });
});
