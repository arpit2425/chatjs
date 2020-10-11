const dependable = require('dependable');
const path = require('path');
const myDependency = [['_', lodash]];
const container = dependable.container();
myDependency.forEach((val) => {
    container.register(val[0], () => {
        return val[1];
    });
});
container.load(path.join(__dirname, '/controllers'));
container.load(path.join(__dirname, '/helpers'));
container.register('container'()=>{
return container;
});
module.exports=container;