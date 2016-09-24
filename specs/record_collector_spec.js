var assert = require( 'assert' );
var Record = require( '../record' );
var RecordCollector = require( '../record_collector' );

describe ( 'Record Collector', function(){
  var recordCollector;

  before(function() {
    // Create a constructor to create Record objects with artist, title, price

    // Create a RecordCollector (or customer) constructor who can buy and sell records.
    recordCollector = new RecordCollector("Steve");
  })

  it ( 'has a name', function() {
    assert.strictEqual(recordCollector.name, "Steve");
  })

  it ( 'has no records', function() {
    assert.strictEqual(recordCollector.collectionSize, 0);
  })

  it ( 'has no cash', function(){
    assert.strictEqual(recordCollector.cash, 0);
  })

  it ( "can't buy a record without any money", function() {
    var record = new Record("T.Rex", "Bolan Boogie", 2.10);
    assert.strictEqual(recordCollector.buy(record), false);
  })

  it ( 'has £5.00', function() {
    recordCollector.cash = 5.00;
    assert.strictEqual(recordCollector.cash, 5.00);
  })

  it ( 'can buy a record', function() {
    var record = new Record("T.Rex", "Bolan Boogie", 2.10);
    assert.strictEqual(recordCollector.buy(record), true);
    assert.strictEqual(recordCollector.collectionSize, 1);
    assert.strictEqual(recordCollector.cash, 2.90);
  })

  it ( "can't sell a record it doesn't own", function() {
    var record = new Record("T.Rex", "Bolan Boogie", 4.10);
    assert.strictEqual(recordCollector.sell(record), null);
    assert.strictEqual(recordCollector.collectionSize, 1);
    assert.strictEqual(recordCollector.cash, 2.90);
  })

  it ( 'can sell a record', function() {
    var record = recordCollector._collection[0];
    assert.strictEqual(recordCollector.sell(record), record);
    assert.strictEqual(recordCollector.collectionSize, 0);
    assert.strictEqual(recordCollector.cash, 5.00);
  })
})



