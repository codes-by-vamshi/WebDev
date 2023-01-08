const markDetails = {
    height: 1.69,
    weight: 78
};

const johnDetails = {
    height: 1.95,
    weight: 92
}

function getBMI() {
    console.log(this.weight/(this.height**2))
}

getBMI.call(markDetails);
getBMI.call(johnDetails);


let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if( a == 2) {
        resolve('Success');
    } else {
        reject('Failed')
    }
})

p.then((msg) => {
    console.log(msg);
}).catch((errMsg) => {
    console.log(errMsg);
})

fetch('https://reqres.in/api/users').then(res => res.json()).then(res => console.log(res))