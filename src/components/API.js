export default {
  getAnswer() {
    return fetch("https://yesno.wtf/api", {
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        return response;
      });
  },
    getRandom(){
      return fetch("https://geek-jokes.sameerkumar.website/api", {
        method: "GET"
      }).then(response => response.json)
          .then(response => {
            return response;
          })
    }
};
