var proto = {
  describe : function() {
    return 'name ' + this.name;
  },

};

//creating a new object whose prototype is proto
var obj = Object.create(proto);
obj.name = 'Ankit';

console.log(obj);
console.log(obj.describe());

//{ name: 'Ankit' }
// name Ankit