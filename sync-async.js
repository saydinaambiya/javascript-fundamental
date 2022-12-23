function sync() {
    console.log(1);
    console.log(2);
}

function async() {
    setTimeout(() => {
        console.log(1);
    }, 0);
    setTimeout(() => {
        console.log(2);
    }, 1000);
    setTimeout(() => {
        console.log(3);
    }, 3000);
}