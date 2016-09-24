function RecordStore (name, city, inventory) {
  this._name = name;
  this._city = city;
  this._inventory = inventory.copy();
  this._cash = 0;
  Object.defineProperty(this, "name", { get: function () { return this._name} });
  Object.defineProperty(this, "city", { get: function () { return this._city} });
  Object.defineProperty(this, "cash", {
    set: function (value) { this._cash = value},
    get: function () { return this._cash } }
  );
  Object.defineProperty(this, "totalAssets", { get: function () { return this._inventory.value + this._cash } });
  Object.defineProperty(this, "inventorySize", { get: function () { return this._inventory.size } });
  Object.defineProperty(this, "inventoryList", { get: function () { return this._inventory.toString() } });
}

module.exports = RecordStore;