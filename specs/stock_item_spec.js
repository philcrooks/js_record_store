var assert = require( 'assert' );
var Record = require( '../record' );
var StockItem = require( '../stock_item' );

describe ( 'Stock Item', function() {
  var stockItem;

  before(function() {
    var record = new Record("T.Rex", "Bolan Boogie", 2.10);
    stockItem = new StockItem(record, 10);
  })

  it ( 'has an item', function() {
    assert.deepEqual(stockItem.item, {_artist: "T.Rex", _title: "Bolan Boogie", _price: 2.10});
  })

  it ( 'has a quantity', function() {
    assert.strictEqual(stockItem.quantity, 10);
  })

  it ( 'has a value', function() {
    assert.strictEqual(stockItem.value, 21.0);
  })

})