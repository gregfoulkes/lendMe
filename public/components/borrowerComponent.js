Vue.component('borrowerpage', {

    data: function () {

        return {

            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            customer_type: 'borrower',
            customer_data: [],

            reference:'',
            description:'',
            amount: {
                value: Number(''),
                currency_code:"ZAR"
            },
            payment_url:''
        }

    },

    mounted: function() {

        let self = this
        this.getCustomer('Andrew')
        console.log(self.firstname)
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

                     //self.customer_data.push(customer)

                     //call createcustomer api
                     

              })
        },

        createTransaction: function () {        
            let self = this;

            //self.reference = reference
            console.log(self.reference)
            console.log(self.description)
            console.log(self.amount.value)
            console.log(self.amount.currency_code)

            let transactionData = {
                reference:self.reference,
                description:self.description,
                amount:{
                    value:self.amount.value,
                    currency_code:self.amount.currency_code
                }
            }

            console.log(transactionData)

            axios.post('api/borrowers/createtransaction', {transactionData})
            .then(function(result){
                self.payment_url = result.data.payment_url;
                console.log(result.data.payment_url);
            })
            .catch(function(err){
                alert(err);
            });
        }
    },

    template: `

    <div>
    
    {{firstname}}
    {{lastname}}
    {{mobile}}
    {{customer_type}}
    {{email}}

    <div class="container">
	<div class="row">
		<div class="col-md-9">
		    <div class="card">
		        <div class="card-body">
		            <div class="row">
		                <div class="col-md-12">
		                    <h4>Your Transaction</h4>
		                    <hr>
		                </div>
                    </div>
                    
		            <div class="row">
		                <div class="col-md-12">
                              
                              <div class="form-group row">
                                <label for="name" class="col-4 col-form-label">Reference</label> 
                                <div class="col-8">
                                  <input v-model ='reference' placeholder="Reference" class="form-control here" type="text">
                                </div>
                              </div>

                              <div class="form-group row">
                                <label for="description" class="col-4 col-form-label">Description</label> 
                                <div class="col-8">
                                  <input v-model = 'description' placeholder="Description" class="form-control here" type="text">
                                </div>
                              </div>transaction

                              <div class="form-group row">
                                <label for="mobile" class="col-4 col-form-label">Value</label> 
                                <div class="col-8">
                                  <input v-model = 'amount.value'  placeholder="Value" class="form-control here" required="required" type="text">
                                </div>
                              </div>

                              <div class="form-group row">
                                <div class="offset-4 col-8">
                                  <button v-on:click="createTransaction()" name="submit" type="button" class="btn btn-primary">Update My Profile</button>
                                </div>
                              </div>
                              <a v-if="payment_url" v-bind:href="payment_url">Pay here</a>  
		                </div>
		            </div>
		            
		        </div>
		    </div>
		</div>
	</div>
</div>

    </div>

    

`
})