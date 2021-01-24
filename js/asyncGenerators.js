export default (async () => {

    function asyncIterator(){
        "use strict";
        return {
            range(from, to) {
                return {
                    from: from,
                    to: to,
                    [Symbol.asyncIterator](){
                        return {
                            current: this.from,
                            last: this.to,
                            async next() {
                                await new Promise((res, rej) => setTimeout(res, 1000));

                                if(this.current <= this.last){
                                    return {
                                        done: false,
                                        value: this.current++
                                    }
                                }else {
                                    return {
                                        done: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /**
    for await(let i of asyncIterator().range(10, 20)){
        console.log(i);
    }
    */

    async function* asyncGenerator(start, end){

        for(let i = start; i <= end; i++){
            await new Promise((resolve) => setTimeout(resolve, 1000));

            yield i;
        }

    }

    (async () => {

        for await(let iterable of asyncGenerator(1, 10)){
            console.log(`${iterable} seconds passed`);
        }

    })()

    const promises = [
        new Promise((resolve, reject) => setTimeout(() => resolve("Dog"), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(23), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve("Narwhal"), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve("Russia"), 2000))
    ]

    Promise.all(promises).then(resolve => console.log(resolve));

})();