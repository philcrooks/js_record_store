var assert = require( 'assert' );
var Record = require( '../record' );
var StockItem = require( '../stock_item' );
var Inventory = require( '../inventory' );

describe( 'Inventory', function() {
  var inventory;

  before(function() {
    inventory = new Inventory();
    var record = new Record("The Beatles", "Rubber Soul", 10.00);
    inventory.add(new StockItem(record, 10));
    record = new Record("The Beatles", "Revoler", 10.00);
    inventory.add(new StockItem(record, 10));
    record = new Record("The Beatles", "Sgt. Pepper's Lonely Hearts Club Band", 10.00);
    inventory.add(new StockItem(record, 10));
    record = new Record("The Beatles", "Abbey Road", 10.00);
    inventory.add(new StockItem(record, 10));
    record = new Record("The Rolling Stones", "Let It Bleed", 10.00);
    inventory.add(new StockItem(record, 10));
    record = new Record("The Rolling Stones", "Stick Fingers", 10.00);
    inventory.add(new StockItem(record, 10));
    record = new Record("The Rolling Stones", "Exile on Main Street", 10.00);
    inventory.add(new StockItem(record, 10));
    record = new Record("Bob Dylan", "Another Side of Bob Dylan", 10.00);
    inventory.add(new StockItem(record, 10));
    record = new Record("Bob Dylan", "Blood on the Tracks", 10.00);
    inventory.add(new StockItem(record, 10));
    record = new Record("Bob Dylan", "Before the Flood", 10.00);
    inventory.add(new StockItem(record, 10));
  })

  it( 'has the right number of stock items', function() {
    assert.strictEqual(inventory.size, 10);
  })

  it( 'has the right value', function() {
    assert.strictEqual(inventory.value, 1000.0);
  })

  // Create a method that lists the inventory.
  it( 'lists the inventory', function() {
    assert.strictEqual(inventory.toString(), "");
  })

})