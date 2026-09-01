const username:string ='Bhargavi';
let attempts:number=5;
const passed:boolean=true;
console.log(username);
console.log(attempts);
console.log(passed)

const browsers:string[]=['chrome','edge','firefox'];

for(let browser of browsers){
console.log(browser);
}

for(let i=0;i<browsers.length;i++){
    console.log(browsers[i]);
}

const user={
    username:'Bhargavi',
    password:'12345',
    active:true

}
console.log(user.username);
console.log(user.password);
console.log(user.active);

function add(a:number,b:number):number{
    return a+b;
}
console.log(add(3,4));

const results=[{
    name:'bhargavi',
    status:'passed'
},{name : 'sravanthi',
    status:'failed'
},{name:'jahnavi',
    status:'passed'
},{name:'nikitha',status:'failed'}]

const failedtests=results.filter(result => result.status==='failed');
console.log(failedtests);

const bhargavi=results.find(result=>result.name==='bhargavi')
console.log(bhargavi)
const testnames=results.map(result=>result.name)
console.log(testnames);

interface User{
    username:string
    password:string
    status:boolean

}

const user1:User={
username:'bhargavi',password:'1234', status:true
}

const results1 = [
    { name: 'Login', status: 'passed', duration: 2.5 },
    { name: 'Search', status: 'failed', duration: 5.2 },
    { name: 'Checkout', status: 'passed', duration: 3.4 },
    { name: 'Payment', status: 'failed', duration: 7.1 }
];

 console.log( results1.length);
 console.log(results1.filter(result=> result.status==='failed'));
 console.log(results1.filter(result=>result.status==='failed').map(result=>result.name));
let total=0;
 for(let result of results1){
total=total+result.duration;
 }
 console.log(total);
 console.log( results1.reduce((acc,result)=>acc+result.duration,0))
