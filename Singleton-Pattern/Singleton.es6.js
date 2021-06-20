class Singleton {
    static instance = null

    static getInstance() {
        const { instance = new Singleton() } = Singleton
        return Singleton.instance = instance
    }

    static getInstance() {
        const { instance = new Singleton() } = Singleton
        return Singleton.instance = instance
    }

    /* 私有变量 */
    privateAttr = "Hello~"
    /* 私有随机数 */
    privateRandomNum = Math.random()
    publicAttr = "I'm your friend"

    /* 私有函数 */
    privateMethod() {
        console.log("Private Method")
    }

    publicMethod() {
        console.log('You can call me jack')
    }

    getPrivateAttr() {
        return this.privateAttr
    }

    getRandomNum() {
        return this.privateRandomNum
    }
}