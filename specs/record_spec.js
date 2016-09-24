var assert = require( 'assert' );
var Record = require( '../record' );

describe ( 'Record', function() {
  var record;

  before(function() {
    // Create a constructor to create Record objects with artist, title, price
    record = new Record("T.Rex", "Bolan Boogie", 2.10);
  })

  it( 'has an artist', function() {
    assert.strictEqual("T.Rex", record.artist);
  })

  it ( 'has a title', function () {
    assert.strictEqual("Bolan Boogie", record.title);
  })

  it ( 'has a price', function () {
    assert.strictEqual(2.10, record.price);
  })

  // Create some new records

})

