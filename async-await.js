// Async and Await operations

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

async function start(){
   console.log(await dowload(url1));
   console.log(await dowload(url2));

    // await download(url3)
    // await download(url4)
    // await download(url5)
}
start()