
let app = new Vue ({
    el: '#lendMe',    
    data: {
        showlanding: true,
        showborrower:false
    },

    mounted: function() {

    },

    methods: {

        showBorrower: function(){
            this.showlanding = false
            this.showborrower = true
        }

    }


})