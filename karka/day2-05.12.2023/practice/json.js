// a={
//   "fname":"blessie",
//   "place":"Poovancode",
//   "mobile":4889
// }
// console.log(a.fname)
a={
    fname:"blessie",
    place:"Poovancode",
    mobile:4889,
    func:function display()
    {
        console.log(this)
    }
  }
  a.func()