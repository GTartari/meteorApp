DataFile = new Mongo.Collection('Data');

Meteor.methods({
  parseUpload( data ) {
    check( data, Array );

    DataFile.remove({});

    for ( let i = 0; i < data.length; i++ ) {
      let item   = data[ i ]
      DataFile.insert( item );
    }
  }
});
