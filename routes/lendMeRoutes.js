module.exports = function(borrowerServices) {

    async function Customer(req,res){
        try {
            await borrowerServices.insertBorrower()
            res.json({
                status: 'success',
                firstname: 'greg',
                lastname: 'foulkes'
            });
        } catch (err) {
            res.json({
                status: 'error',
                error: err.stack
            });
        }

    }

    return {
        Customer
    }
}