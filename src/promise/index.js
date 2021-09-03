//

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Promise kept!');
        } else{
            reject('Unfulfilled promise.');
        }
    });
};
/*
somethingWillHappen()
.then(resolve => console.log(resolve))
.catch(error => console.error(err));
*/

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true){
            setTimeout(() => {
                resolve('Promise kept!');
            }, 2000);
        } else{
            const error = new Error('Unfulfilled promise 2');
            reject(error);
        }
    });
}

/*
somethingWillHappen2()
.then(resolve => console.log(resolve))
.catch(error => console.log(error));
*/
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(resolve => console.log('Arrays of result: ' + resolve))
.catch(error => console.error(error));

