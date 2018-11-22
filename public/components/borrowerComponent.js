Vue.component('borrowerpage', {

    data: function () {

        return {

            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            customer_type: 'borrower',
            customer_data: []

        }

    },

    mounted: function() {
        this.getCustomer('Andrew')
    },

    methods: {

        createCustomer: function() {

            let self = this

            let customer = {
                firstname:self.firstname,
                lastname:self.lastname,
                email:self.email,
                mobile:Number(self.mobile),
                customer_type:this.customer_type
            }
            console.log(customer)

          axios.post('/api/borrowers/createcustomer', {customer}).then(function(result){
            alert(result.status)
          })


        },

        getCustomer: function(firstname) {

            //console.log(firstname)

           return axios.get('/api/borrowers/name/' + firstname).then(function(result){
                alert(result.status)
            let resultData = result.data
                console.log(resultData)
            let customerData = resultData.data
                console.log(customerData)

                let self = this

             
                    self.firstname = customerData[0].firstname,
                    self.lastname = customerData[0].lastname,
                    self.email = customerData[0].email,
                    self.mobile = Number(customerData[0].mobile),
                    self.customer_type = customerData[0].customer_type
                    console.log(customerData[0].firstname)

                    let customer = {
                        firstname:self.firstname,
                        lastname:self.lastname,
                        email:self.email,
                        mobile:Number(self.mobile),
                        customer_type:self.customer_type
                    }

                    // self.data.customer_data.push(customer)

                     console.log(customer)
                

              })

        }

    },

    template: `

    <div>
    
    <div v-bind:firstname='firstname'>{{firstname}}</div>

    </div>


`
})