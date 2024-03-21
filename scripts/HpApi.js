class HpApi {
    constructor() {
      this.baseUrl = "https://hp-api.onrender.com/api/characters";
    }
  
    async getCharacters() {
      try {
        const response = await axios.get(`${this.baseUrl}`);
        return response.data.filter(
          (char) => char.house !== "" && char.image !== "" && char.name !== " "
        );
      } catch (err) {
        console.log(err);
      }
    }
  }
  
  export default HpApi;