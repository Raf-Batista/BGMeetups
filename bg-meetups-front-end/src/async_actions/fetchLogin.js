 const fetchLogin = async (params) => {
     return (dispatch) => {
        try {
            const response = await fetch(URL, {
               headers: 'application/json',
               method: 'POST',
               body: JSON.stringify(params)
           });
            const result = await JSON.parse(response);
           
       } catch (error) {
           
       }
     }
    
    
};

export default fetchLogin;