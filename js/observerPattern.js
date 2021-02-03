export default (async () => {
    "use strict";

    function Subject() {
        this.observers = [];
    }

    /**
     * 
     * Observer Pattern can be a 'class' or a 'constructor function'.
     * Observer pattern has three function which are 'unsubscribe', 'subscribe' and 'fire'.
     * 'subscribe' function pushes a 'function' from the parameter into an array.
     * 'unsubscribe' function pops desired chosen 'function' from the array.
     * 'fire' function loops through all 'stakced functions' from the array and calls them all.
     * 
     */

    Subject.prototype = {
        subscribe: function(fn){
            this.observers.push(fn);
        },
        unsubscribe: function(fnToRemove){
            this.observers = this.observers.filter( fn => {
                if(fn != fnToRemove){
                    return fn;
                }
            })
        },
        fire: function()
        {
            this.observers.forEach( fn => {
                fn.call();
            })
        }
    }

    const subject = new Subject();

    function ObserverOne(){
        console.log("ObserverOne fired");
    }

    function ObserverTwo(){
        console.log("ObserverTwo fired");
    }

    subject.subscribe(ObserverOne);
    subject.subscribe(ObserverTwo);

    subject.fire();

})();