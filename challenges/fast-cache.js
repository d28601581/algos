/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/

const fastCache = func => {
  let cache = {};
  return (arg) => {
    if(cache[arg]){
      return cache[arg];
    } 
    cache[arg] = func(arg);
    return cache[arg];
  }
};

/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/

const fastCacheAdvanced = func => {
  let cache = {};
  return (...arg) => {
    if(cache[JSON.stringify(arg)]){
      return cache[JSON.stringify(arg)];
    } 
    cache[JSON.stringify(arg)] = func(...arg);
    return cache[JSON.stringify(arg)]
  }

};

// const pluralizedKeys = (...objs) => {
//     return objs.reduce((pluralizedKeys, obj) => {
//       return pluralizedKeys.concat(Object.keys(obj).map(key => `${key}s`));
//     }, [])
//   };
// let cachedPluralize = fastCacheAdvanced(pluralizedKeys);
// console.log(cachedPluralize({'cat': true}, {'dog': true, 'frog': true}))
// console.log(cachedPluralize({'plant': true}));
// console.log(cachedPluralize({'banana': true}));
// console.log(cachedPluralize({'banana': true}, {'tree': true}));
module.exports = {fastCache, fastCacheAdvanced};