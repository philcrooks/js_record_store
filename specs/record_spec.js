var assert = require( 'assert' );
var Record = require( '../record' );

describe ( 'Record', function() {
  var record;

  before(function() {
    // Create a constructor to create Record objects with artist, title, price
    record = new Record("T.Rex", "Bolan Boogie", 2.10);
  })

  it( 'has an artist', function() {
    assert.strictEqual(record.artist, "T.Rex");
  })

  it ( 'has a title', function () {
    assert.strictEqual(record.title, "Bolan Boogie");
  })

  it ( 'has a price', function () {
    assert.strictEqual(record.price, 2.10);
  })

  it ( 'converts to s string', function() {
    assert.strictEqual(record.toString(), "T.Rex                Bolan Boogie                            ");
  })

  it ( 'can be copied', function() {
    var copy = record.copy();
    assert.deepEqual(copy, record);
    assert.notStrictEqual(copy, record);
  })

})

