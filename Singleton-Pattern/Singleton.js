/* 利用闭包特性，保证实例单一性 */
var singleton = (function() {
    /* 定义实例变量 */
    var instance;
    /* 初始化 */
    function init() {
        /* 私有函数 */
        function privateMethod() {
            console.log("Private Method");
        }
        /* 私有变量 */
        var privateAttr = "Hello~";
        /* 私有随机数 */
        var privateRandomNum = Math.random();
        /* 返回接口对象 */
        return {

            publicMethod: function() {
                console.log('You can call me jack')
            },

            publicAttr: "I'm your friend",

            getPrivateAttr: function() {
                return privateAttr;
            },
            getRandomNum: function() {
                return privateRandomNum;
            }
        }
    };
    return {
        /* 对外接口 */
        getInstance: function() {
            /* 保证返回同一实例变量 */
            if (!instance) {
                instance = init();
            }

            return instance;
        }
    }
})();

/* Test */
var singleA = singleton.getInstance();
var singleB = singleton.getInstance();

console.log(singleA === singleB) // true
