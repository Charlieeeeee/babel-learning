console.log([1,2].includes(1))

const readonly = (target,name,description)=>{
    console.log('this is read only')
    description.writable = false
    return
};

class A {
    @readonly
    myName(){
        return 'charlie'
    }
}
