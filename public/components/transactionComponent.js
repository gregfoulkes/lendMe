Vue.component('transaction',{

    data: function() {
        return {
            reference:'',
            description:'',
            amount: {
                value: Number(''),
                currency_code:"ZAR"
            }

        }

    },

    methods: {

        createTransaction: function () {        
            let self = this;

            //self.reference = reference
            console.log(self.reference)
            console.log(self.description)
            console.log(self.amount.value)
            console.log(self.amount.currency_code)



        }

    },

    template: `

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
                              </div>

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
                              
		                </div>
		            </div>
		            
		        </div>
		    </div>
		</div>
	</div>
</div>

    `
})