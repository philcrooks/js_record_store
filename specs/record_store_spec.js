var assert = require( 'assert' );
var Record = require( '../record' );
var StockItem = require( '../stock_item' );
var Inventory = require( '../inventory' );
var RecordStore = require( '../record_store');
var RecordCollector = require( '../record_collector')

describe( 'Record Store', function() {
  var recordStore;

  before(function() {
    Record.resetId();
    var inventory = new Inventory();
    var record = new Record("The Beatles", "Rubber Soul", 10.00);

    // Create some new records and stock items
    inventory.add(new StockItem(record, 10));
    record = new Record("The Beatles", "Revolver", 10.00);
    inventory.add(new StockItem(record, 10));
    record = new Record("The Beatles", "Sgt. Pepper's Lonely Hearts Club Band", 10.00);
    inventory.add(new StockItem(record, 10));
    record = new Record("The Beatles", "Abbey Road", 10.00);
    inventory.add(new StockItem(record, 10));
    record = new Record("The Rolling Stones", "Let It Bleed", 10.00);
    inventory.add(new StockItem(record, 10));
    record = new Record("The Rolling Stones", "Sticky Fingers", 10.00);
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
    recordStore = new RecordStore("Splat!", "Inverness", inventory);
  })

  it ( 'has a name', function (){
    assert.strictEqual(recordStore.name, "Splat!");
  })

  it ( 'has a city', function() {
    assert.strictEqual(recordStore.city, "Inverness");
  })

  it ( 'has inventory', function() {
    assert.strictEqual(recordStore.inventorySize, 10);
  })

  // Give the RecordStore a balance i.e. cash in bank.
  it ( 'has no cash in the bank', function() {
    assert.strictEqual(recordStore.cash, 0);
  })

  it ( 'has cash in the bank', function() {
    recordStore.cash = 5000;
    assert.strictEqual(recordStore.cash, 5000);
  })

  // Add some records to your RecordStore.
  it ( 'can add inventory for new record', function () {
    recordStore.inventoryAdd("The Beatles", "Help!", 9.50, 10);
    assert.deepEqual(recordStore._inventory._inventory[10],
      {_item: {_artist: "The Beatles", _title: "Help!", _price: 9.50, _id: 11}, _quantity: 10});
  })

  it ( "won't add new stock item for old record", function () {
    recordStore.inventoryAdd("The Beatles", "Revolver", 9.50, 10);
    assert.strictEqual(recordStore.inventorySize, 11)
  })


  it ( 'can add inventory for a stocked record', function () {
    recordStore.inventoryUpdate("the rolling stones", "exile on main street", 12);
    assert.strictEqual(recordStore._inventory._inventory[6].quantity, 12);
  })

  it ( "won't change inventory if stocked record not found", function () {
    recordStore.inventoryUpdate("the rolling stones", "aftermath", 12);
    assert.strictEqual(recordStore.inventorySize, 11)
  })

  // Create a method that lists the inventory.
  it ( 'can list the inventory', function () {
    assert.strictEqual(recordStore.inventoryList,
      "   1. The Beatles          Rubber Soul                                10   100.00\n" +
      "   2. The Beatles          Revolver                                   10   100.00\n" +
      "   3. The Beatles          Sgt. Pepper's Lonely Hearts Club Band      10   100.00\n" +
      "   4. The Beatles          Abbey Road                                 10   100.00\n" +
      "   5. The Rolling Stones   Let It Bleed                               10   100.00\n" +
      "   6. The Rolling Stones   Sticky Fingers                             10   100.00\n" +
      "   7. The Rolling Stones   Exile on Main Street                       12   120.00\n" +
      "   8. Bob Dylan            Another Side of Bob Dylan                  10   100.00\n" + 
      "   9. Bob Dylan            Blood on the Tracks                        10   100.00\n" +
      "  10. Bob Dylan            Before the Flood                           10   100.00\n" +
      "  11. The Beatles          Help!                                      10    95.00\n");
  })

  // Create a method that reports on the financial situation of the store. Cash and value of inventory.
  it ( 'can report on financial position', function() {
    assert.strictEqual(recordStore.totalAssets, 6115);
  })

  // Create a method so that the RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold
  it( 'can sell a record', function() {
    var assets = recordStore.totalAssets;
    var record = recordStore.findRecord("The Rolling Stones", "Sticky Fingers");
    assert.deepEqual({_artist: "The Rolling Stones", _title: "Sticky Fingers", _price: 10.00, _id: 6}, recordStore.sell(record));
    assert.strictEqual(recordStore._inventory._inventory[5].quantity, 9);
    assert.strictEqual(recordStore.totalAssets, assets);
  })

  it( 'can sell to a RecordCollector', function() {
    var collector = new RecordCollector();
    collector.cash = 10.00;
    assert.strictEqual(collector.buy(recordStore.sell(recordStore.findRecord("The Rolling Stones", "Sticky Fingers"))), true);
  })

})
