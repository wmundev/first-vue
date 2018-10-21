export default {
    getAnswer() {
        return fetch('https://yesno.wtf/api',
            {
                method: 'GET'
            }
        ).then((response) => response.json())
            .then((response) => {
                    console.log(response);
                    return response.answer;
                }
            );
    }


}