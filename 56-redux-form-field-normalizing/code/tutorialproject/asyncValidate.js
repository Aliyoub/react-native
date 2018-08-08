const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const asyncValidate = values => {
    return sleep(1000).then(() => {                
        if (!['jeroh'].includes(values.username)) {            
            throw { username: 'User does not exist' };            
        }  console.log('PHU'+values.email)
        if (values.email == '') {            
            throw { email: 'Please enter email' };            
        }  
        if (values.password == '') {            
            throw { password: 'Please enter password' };            
        }              
    });
};
export default asyncValidate;