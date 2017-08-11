myNum: number = 5;
myString: string = "Hello Universe";
myArr: number[] = [1,2,3,4];
myObj = { name:'Bill'};
anythingVariable: string = "Hey";
anythingVariable: number = 25;
arrayOne: boolean[] = [true, false, true, true];
arrayTwo: any[] = [1, 'abc', true, 2];
myObj: obj = { x: 5, y: 10 };
// object constructor
MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
	throw new Error('Error message');
}
