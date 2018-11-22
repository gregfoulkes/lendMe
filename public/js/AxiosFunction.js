function AxiosFunction() {
    
    function getBorrower(name){
        return axios.get('/api/borrowers/name/'+name);
    }
    
    return{
        getBorrower
    }
}