new Vue({
    el:"#assignment",
    data() {
        return {
            counter : 0,
            result : ''
        }
    },

    computed: {
        displayResult()
        {
            if(this.counter > 37)
            {
                return this.result = "Too much!"
            }
        
            else{
                return this.result="not there yet!!"
            }
            
        }
    },
    watch:
    {
        counter(value)
        {
            const that=this;
            setTimeout(function()
            {that.counter=0;},5000);
            
            
        }
    },

    methods: {
        addFive() {
            this.counter+=5;
        },

        addOne() {
            this.counter+=1;
        }
    }
});