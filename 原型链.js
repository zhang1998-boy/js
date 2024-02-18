/*
 *  prototype  原型 | 原型对象
 *  1.prototype [函数]的一个属性是一个对象
 *  2.创建函数的时候会默认添加prototype这个属性
 *
 *  __proto__  隐式原型
 *  1.对象的属性
 *  2.指向构造函数的原型对象(prototype)
 *  3.obj.__proto__ ===  function.prototype
 *
 *  原型链的顶层 Object.prototype.__proto__   === null
 *
 *  查找规则 : 先从自身查找,然后按照 隐式原型查找 最后查到 原型链的顶层 
 * 
 *   xiaoming {
 *   __proto__ : presion.prototype = {
 *   __proto__:Object.prototype = {
 *   __proto__:null
 * }
 * 
 * }
 * }
 * 
 * 
 * 
*/


function presion (name) {
  this.name = name,
    this.age = 18
}

let xiaoming = new presion('xiaoming')

console.log(new Object);