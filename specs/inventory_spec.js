var assert = require( 'assert' );
var Record = require( '../record' );
var StockItem = require( '../stock_item' );
var Inventory = require( '../inventory' );

describe( 'Inventory', function() {
  var inventory;

  before(function() {
    Record.resetId();
    inventory = new Inventory();
    var record = new Record("The Beatles", "Rubber Soul", 10.00);                       // id = 1
    inventory.add(new StockItem(record, 10));
    record = new Record("The Beatles", "Revolver", 10.00);                              // id = 2
    inventory.add(new StockItem(record, 10));
    record = new Record("The Beatles", "Sgt. Pepper's Lonely Hearts Club Band", 10.00); // id = 3
    inventory.add(new StockItem(record, 10));
    record = new Record("The Beatles", "Abbey Road", 10.00);                            // id = 4
    inventory.add(new StockItem(record, 10));
    record = new Record("The Rolling Stones", "Let It Bleed", 10.00);                   // id = 5
    inventory.add(new StockItem(record, 10));
    record = new Record("The Rolling Stones", "Sticky Fingers", 10.00);                 // id = 6
    inventory.add(new StockItem(record, 10));
    record = new Record("The Rolling Stones", "Exile on Main Street", 10.00);           // id = 7
    inventory.add(new StockItem(record, 10));
    record = new Record("Bob Dylan", "Another Side of Bob Dylan", 10.00);               // id = 8
    inventory.add(new StockItem(record, 10));
    record = new Record("Bob Dylan", "Blood on the Tracks", 10.00);                     // id = 9
    inventory.add(new StockItem(record, 10));
    record = new Record("Bob Dylan", "Before the Flood", 10.00);                        // id = 10
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
    assert.strictEqual(inventory.toString(),
     //12345678901234567890123456789012345678901234567890123456789012345678901234567890 
      "   1. The Beatles          Rubber Soul                                10   100.00\n" +
      "   2. The Beatles          Revolver                                   10   100.00\n" +
      "   3. The Beatles          Sgt. Pepper's Lonely Hearts Club Band      10   100.00\n" +
      "   4. The Beatles          Abbey Road                                 10   100.00\n" +
      "   5. The Rolling Stones   Let It Bleed                               10   100.00\n" +
      "   6. The Rolling Stones   Sticky Fingers                             10   100.00\n" +
      "   7. The Rolling Stones   Exile on Main Street                       10   100.00\n" +
      "   8. Bob Dylan            Another Side of Bob Dylan                  10   100.00\n" + 
      "   9. Bob Dylan            Blood on the Tracks                        10   100.00\n" +
      "  10. Bob Dylan            Before the Flood                           10   100.00\n");
  })

  it( 'can be copied', function(){
    var copy = inventory.copy();
    assert.deepEqual(copy, inventory);
    assert.notStrictEqual(copy, inventory);
  })

  it( "can't find item by artist/title", function() {
    var stockItem = inventory.findStockByName("Bob Dylan", "Blood on the Tapes");
    assert.strictEqual(stockItem, null);

  })

  it( 'can find item by artist/title', function() {
    var stockItem = inventory.findStockByName("Bob Dylan", "Blood on the Tracks");
    assert.notStrictEqual(stockItem, null);
    assert.strictEqual(stockItem, inventory._inventory[8]);
  })

  it( "can't find record by artist/title", function() {
    var record = inventory.findRecordByName("Bob Dylan", "Blood on the Tapes");
    assert.strictEqual(record, null);

  })

  it( 'can find record by artist/title', function() {
    var record = inventory.findRecordByName("Bob Dylan", "Blood on the Tracks");
    assert.notStrictEqual(record, null);
    assert.strictEqual(record, inventory._inventory[8]._item);
  })

  it( 'can locate item by id', function(){
    var stockItem = inventory.findStockById(4);
    assert.notStrictEqual(stockItem, null);
    assert.strictEqual(stockItem, inventory._inventory[3]);
  }) 

  it ( "returns null if stock id doesn't exist", function() {
    var stockItem = inventory.findStockById(21);
    assert.strictEqual(stockItem, null);
  })

  it( 'can locate record by id', function(){
    var record = inventory.findRecordById(4);
    assert.notStrictEqual(record, null);
    assert.strictEqual(record, inventory._inventory[3]._item);
  }) 

  it ( "returns null if record id doesn't exist", function() {
    var record = inventory.findRecordById(21);
    assert.strictEqual(record, null);
  })

})