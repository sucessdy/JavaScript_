var fullname = "Mukta kumari";

var obj = {
  fullname: "Hacked full name",

  prop: {
    fullname: "Inside Prop",
    getFullName: function () {
      return this.fullname;
    },
  },

  getFullName: function () {
    return this.fullname;
  },

  getFullNameV2: () => this.fullname,
  getFullNameV3: (function () {
    return this.fullname;
  })(),
};


console.log(obj.prop.getFullName())
console.log(obj.getFullName())
console.log(obj.getFullNameV2())
console.log(obj.getFullNameV3())
