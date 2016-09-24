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

  it ( 'can update quantity', function(){
    stockItem.quantity = 12;
    assert.strictEqual(stockItem.quantity, 12);
  })

  it ( 'converts to s string', function() {
    assert.strictEqual(stockItem.toString(), "T.Rex                Bolan Boogie                               12    25.20");
  })

  it( 'can be copied', function(){
    var copy = stockItem.copy();
    assert.deepEqual(copy, stockItem);
    assert.notStrictEqual(copy, stockItem);
  })

  it ( 'has an artist name', function() {
    assert.strictEqual(stockItem.artist, "T.Rex");
  })

  it ( 'has an album title', function() {
    assert.strictEqual(stockItem.title, "Bolan Boogie");
  })

})