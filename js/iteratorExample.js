export default ( () => {

    const numbers = ['aa', 'ab', 'ac', 'ad', 'ae'];

    /**
    for (const item of numbers){
        console.log(item);
    }
    */

    const someObject = {
        '1': 'aa',
        '2': 'ab',
        '3': 'ac',
        '4': 'bruh',
        '5': 'tomato'
    }

    // Ability to loop through both Keys and Values of an Object
    /**
    for( const item in someObject){
        console.log(someObject[item]);
    }
    */

    // An Iterator working parts
    const sampleIterator = numbers[Symbol.iterator]();
    //console.log(sampleIterator.next());
    

    function squaredIter(max) {
        "use strict";

        return {
            [Symbol.iterator]() {
                let count = 0;

                return {
                    next() {
                        count++

                        if(count <= max){
                            return {
                                done: false,
                                value: count * count,
                            }
                        }

                        return {
                            done: true,
                            value: undefined
                        }

                    }
                }
            }
        }
    }    

   for(const elem of squaredIter(12)){
       console.log(elem);
   }


})();
