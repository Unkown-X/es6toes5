class Coder{
    name(val){
        console.log(val);
        return val;
    }
    skill(val){
        console.log(this.name('jspang')+':'+'Skill:'+val);
    }
 
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
 
    add(){
        return this.a+this.b;
    }
}
 
let jspang=new Coder();
console.log(jspang.add());