new Vue({
    el:"#assignment",
    data() {
        return {
            counter : 0,
            result : ''
        }
    },

    computed: {
        // displayResult()
        // {
        //     if(this.counter > 37)
        //     {
        //         return 
        //     }
        
        //     else{
        //     return 
        //     }
        // }
    },
    // watcher:
    // {

    // },

    methods: {
        addFive() {
            this.counter+=5;
        },

        addOne() {
            this.counter+=1;
        }
    }
});