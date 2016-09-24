var assert = require( 'assert' );
var Record = require( '../record' );
var StockItem = require( '../stock_item' );
var RecordStore = require( '../record_store');

describe( 'Record Store', function() {
  var recordStore;

  before(function() {
    var inventory = new Inventory();
    var record = new Record("The Beatles", "Rubber Soul", 10.00);

    // Create some new records and stock items
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

    // Create a RecordStore that has a name, city and multiple records in it's inventory
    recordStore = new RecordStore("Splat", "Uig", inventory);
  })

  // Give the RecordStore a balance i.e. cash in bank.
  // Add some records to your RecordStore.
  // Create a method that lists the inventory.
  // Create a method so that the RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold
  // Create a method that reports on the financial situation of the store. Cash and value of inventory.

})
