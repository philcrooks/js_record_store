var assert = require( 'assert' );
var layout = require( '../layout' );

describe( 'layout', function() {
  it ( 'truncates overlong strings', function() {
    assert.strictEqual("......", layout("The Beatles", 6, false));
  })

  it( 'left aligns string', function() {
    assert.strictEqual("The Beatles    ", layout("The Beatles", 15, false));
  })

  it( 'right aligns strings', function() {
    assert.strictEqual("    The Beatles", layout("The Beatles", 15, true));
  })

  it( 'truncates integers', function() {
    assert.strictEqual(".....", layout(1000000, 5, false));
  })

  it( 'left aligns integers', function() {
    assert.strictEqual("1000000   ", layout(1000000, 10, false));
  })

  it( 'right aligns integers', function() {
    assert.strictEqual("   1000000", layout(1000000, 10, true));
  })

  it( 'truncates floating point numbers', function() {
    assert.strictEqual("....", layout(33.3333333, 4, false));
  })

  it( 'left aligns floating point numbers', function() {
    assert.strictEqual("33.33   ", layout(33.3333333, 8, false));
  })

  it( 'right aligns floating point numbers', function() {
    assert.strictEqual("   33.33", layout(33.3333333, 8, true));
  })
});