//ทบทวน callback function 

function calculate(x, y,callback) {
    setTimeout(() =>{
        const sum =  x+y;
        callback(sum);
    },1000)
}
function display(result){   
    console.log("Result => ",result);
}
//ฟังก์ชั่นปกติ
calculate(11, 11,function(result){
    console.log("Result => ",result);
});
