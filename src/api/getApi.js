export const getApi = async() =>{
    try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        return data.results
    } catch (error) {
        console.error(error);
    }

}