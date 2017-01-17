DataFile = new Mongo.Collection('DataTest');

Meteor.methods({
  'dataUpload.insert' ( data, i ) {
    //check( data, Array );
    DataFile.insert( data );
    return i;
  }
})
