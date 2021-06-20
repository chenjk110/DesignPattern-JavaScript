class Singleton {
    private static instance: Singleton = null

    public static getInstance() {
        const { instance = new Singleton() } = Singleton
        return Singleton.instance = instance
    }

    /* 私有变量 */
    private privateAttr = "Hello~";

    /* 私有随机数 */
    private privateRandomNum = Math.random();

    public publicAttr = "I'm your friend"

    /* 私有函数 */
    private privateMethod() {
        console.log("Private Method");
    }

    public publicMethod() {
        console.log('You can call me jack')
    }

    public getPrivateAttr() {
        return this.privateAttr;
    }

    public getRandomNum() {
        return this.privateRandomNum;
    }
}