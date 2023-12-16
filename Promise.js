const { rejects } = require("assert");
const { resolve } = require("path/posix");

// สร้าง promise
const connect = true;
const url1 = "http://1"
const url2 = "http://2"
const url3 = "http://3"
const url4 = "http://4"
const url5 = "http://5"

function dowload(url){
    return new Promise(function(resolve, reject){
        console.log("dowload..... from " + url);
        setTimeout(() =>{
            if(connect){
                resolve('Successfully download'+url);
            }
            else{
                reject('Failed to connect');
            }
        },1000)
    })
}
// dowload(url1).then(result=>{
//     console.log(result)
// }).catch(err=>{
//     console.log(err)
// }).finally(() => {
//     console.log("stop prcess");
// });

// fix callback hell

dowload(url1).then(function(result){
    console.log(result)
    return dowload(url2)
}).then(function(result){
    console.log(result)
    return dowload(url3)
}).then(function(result){
    console.log(result)
    return dowload(url4)
}).then(function(result){
    console.log(result)
}).finally(()=>{
    console.log('stop processing')
})