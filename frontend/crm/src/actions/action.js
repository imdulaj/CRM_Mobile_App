export const loadInitialContacts = () => {
    return(dispatch) => {
        fetch('http://192.168.1.102:3000/contact')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch({ type: 'INITIAL_FETCH' , payload: data })
            })
            .catch(error => console.log(error))
    }
}