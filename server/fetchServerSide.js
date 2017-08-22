import configMongoose from './configMongoose';
let Entry = configMongoose.Entry;

export default () => {
  return Entry.find({}, function(err, entryDocs) {
    return entryDocs;
  }).then ((entriesArrayFromDB) => {
    return entriesArrayFromDB;
  });
}


