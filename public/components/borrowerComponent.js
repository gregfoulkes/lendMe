Vue.component('borrowerpage', {

    data: function () {

        return {

            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            customer_type: 'borrower'

        }

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


        }

    },

    template: `

    <div>
    <div class="container">
	<div class="row">
		<div class="col-md-9">
		    <div class="card">
		        <div class="card-body">
		            <div class="row">
		                <div class="col-md-12">
		                    <h4>Your Profile</h4>
		                    <hr>
		                </div>
		            </div>
		            <div class="row">
		                <div class="col-md-12">
		                    <form>
                        
                              <div class="form-group row">
                                <label for="name" class="col-4 col-form-label">First Name</label> 
                                <div class="col-8">
                                  <input v-model='firstname' id="name" name="name" placeholder="First Name" class="form-control here" type="text">
                                </div>
                              </div>
                              <div class="form-group row">
                                <label for="lastname" class="col-4 col-form-label">Last Name</label> 
                                <div class="col-8">
                                  <input v-model='lastname' id="lastname" name="lastname" placeholder="Last Name" class="form-control here" type="text">
                                </div>
                              </div>
                              <div class="form-group row">
                                <label for="mobile" class="col-4 col-form-label">Mobile Number</label> 
                                <div class="col-8">
                                  <input v-model='mobile' id="mobile" name="mobile" placeholder="Nick Name" class="form-control here" required="required" type="text">
                                </div>
                              </div>
                           
                              <div class="form-group row">
                                <label  for="email" class="col-4 col-form-label">Email*</label> 
                                <div class="col-8">
                                  <input v-model='email' id="email" name="email" placeholder="Email" class="form-control here" required="required" type="text">
                                </div>
                              </div>
                              
                
                      
                              <div class="form-group row">
                                <div class="offset-4 col-8">
                                  <button v-on:click = 'createCustomer' name="button" type="button" class="btn btn-primary">Update My Profile</button>
                                </div>
                              </div>
                            </form>
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