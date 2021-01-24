export default (async () => {
    "use strict";

    function* generatorExample(max) {

        for(let i = 0; i <= max; i++){
            yield i * i;
        }

        return undefined;
    }


    for(const i of generatorExample(10)){
        console.log(i);
    }

    function* fruitGenerator() {

        const memes = [
            "Orange",
            "Apple",
            "Banana",
            "Kiwi",
            "Grapefruit",
            "Watermelon"
        ]

        let count = 0;
        
        for(const i of memes){
            yield i;
        }
    }
})();