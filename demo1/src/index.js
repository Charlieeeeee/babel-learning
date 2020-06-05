import { qianFen } from './tool.js'
const arr = [1,2,3];
(()=>{
    console.log(arr.includes(1))
    console.log('千分化：',qianFen('98623982343982'))
})()

const pro = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('ok')
    },1000)
})

const say = async ()=>{
	const res = await pro;
  	console.log(`I am ${res}`)
}

say();

const ask = (target, name, descriptor)=>{
    //target是DoSome.prototype,可以获取到实例的所有方法，但是不能获取到属性
    console.log(`What do you say?`)
    target.rap();
    return descriptor
}
class DoSome {
    constructor(){
        this.user = 'charlie'
    }
    static sayHello(){
        console.log('I say hello.')
    }
    @ask
    sayHi(){
        console.log('I say Hi.')
    }
    rap(){
        console.log('我说鸡蛋，你说要')
    }
}

const doSome = new DoSome();
doSome.sayHi();
console.log(doSome.user)
// DoSome.sayHello();