
let app = new Vue ({
    el: '#lendMe',    
    data: {
        showlanding: true,
        showborrower:false,
        showtransactionpage: false
    },

    mounted: function() {

    },

    methods: {

        showBorrower: function(){
            this.showlanding = false
            this.showborrower = true
        },

        showTransaction: function() {
            this.showtransactionpage = true

            this.showlanding = false
        }

    }


})