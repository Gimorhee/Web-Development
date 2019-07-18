let count = 0;

function counter() {
    count++;

    console.log("Count: " + count);
}


function promiseCounter(callback, time) {
    const result = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(callback());
        }, time);
    });

    return result; 
}

promiseCounter(counter, 1000).then(() => {
    return promiseCounter(counter,2000);
}).then(() => {
    return promiseCounter(counter,3000);
});

