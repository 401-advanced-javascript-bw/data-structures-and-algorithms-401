const HashTable = require('../hashtable.js');

describe('add', () => {
  it('should add values to the hashtable', () => {
    let table = new HashTable();
    table.add('number', 2);
    expect(table.data[77]['number']).toEqual(2);
  });
  it('should can also add number keys', () => {
    let table = new HashTable();
    table.add(4, 2);
    expect(table.data[20][4]).toEqual(2);
  });
});

describe('get', () => {
  it('should get the value from the hashtable', () => {
    let table = new HashTable();
    table.add('hi', 'Bonnie');
    let result = table.get('hi');
    expect(result).toEqual('Bonnie');
  });
  it('should return null if key does not exist', () => {
    let table = new HashTable();
    table.add('hi', 'Bonnie');
    let result = table.get('hello');
    expect(result).toBeNull();
  });
  it('should handle collision', () => {
    let table = new HashTable();
    table.add('collision', 'hehe');
    table.add('collision', 'hoho');
    expect(table.data[9]['collision']).toEqual('hoho');
  });
});

describe('contain', () => {
  it('should rreturn true if key exists in hashtable', () => {
    let table = new HashTable();
    table.add(4, 2);
    let result = table.contains(4);
    expect(result).toBeTruthy();
  });
});
