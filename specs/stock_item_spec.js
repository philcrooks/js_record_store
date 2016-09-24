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

  it ( 'converts to s string', function() {
    assert.strictEqual(stockItem.toString(), "T.Rex                Bolan Boogie                               10    21.00");
  })

  it( 'can be copied', function(){
    var copy = stockItem.copy();
    assert.deepEqual(copy, stockItem);
    assert.notStrictEqual(copy, stockItem);
  })

})