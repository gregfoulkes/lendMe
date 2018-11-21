module.exports = function(shoeApi) {

    async function Customer(req,res){
        try {
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