 const fetchLogin = async (params) => {
     return (dispatch) => {
        try {
            const response = await fetch(URL, {
                headers: {
                    'Content-Type': 'application/json'
                },
               method: 'POST',
               body: JSON.stringify(params)
           });
            const result = await response.json();
            // dipatch success action 
           
       } catch (error) {
           // dispatch error 
           console.log(error)
       }
     }
};

export default fetchLogin;