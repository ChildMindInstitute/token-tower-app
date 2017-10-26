import { SQLite } from 'expo';

const db = SQLite.openDatabase({ name: 'db.tokentower' });
db.transaction((tx) => {
  tx.executeSql(
    'create table if not exists photos (id varchar primary key not null, base64);'
  );
});

export const insertPhoto = ({ id, base64 }) => {
  db.transaction((tx) => {
    tx.executeSql('insert into photos (id, base64) values (?, ?)', [id, base64]);
  });
};

export const getAllPhotos = (cb) => {
  db.transaction((tx) => {
    tx.executeSql(
      'select * from photos',
      [],
      (_, { rows: { _array } }) => cb && cb(_array),
    );
  });
};

export const getPhotoById = (id, cb) => {
  db.transaction((tx) => {
    tx.executeSql(
      'select * from photos where id = ?',
      [id],
      (_, { rows: { _array } }) => cb && cb(_array)
    );
  });
};

export const deletePhotos = () => {
  db.transaction((tx) => {
    tx.executeSql('delete from photos', []);
  });
};
