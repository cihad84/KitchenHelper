const {Client} = require('pg');

const recipeSearch = async (ing) => {
  try {
    const client = new Client({
      user: 'cihadakkaya',
      host: 'localhost',
      database: 'sdc',
      port: 5432}
    )
    await client.connect()
    let result = await client.query('SELECT * FROM photos');
    return console.log(result);
    
  } catch (error) {
    console.log(error)
  }
}
recipeSearch();


module.exports = recipeSearch;