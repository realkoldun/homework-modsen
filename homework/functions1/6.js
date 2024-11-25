const x = 5;

(() => {
    function findArrayMinMax(arr){
        /*let min = arr[0];
        let max = arr[0];
        for(let i = 1; i < arr.length; i++) {
            if(arr[i] < min) min = arr[i];
            if(arr[i] > max) max = arr[i];
        }*/
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        return [min, max];
    }
    const array = [];
    for(let i = 0; i < x; i++) array.push(parseInt((Math.random() * 100).toString()));
    const [min, max] = findArrayMinMax(array);
    console.log(`${array}: min = ${min}, max=${max}`);

})(x)