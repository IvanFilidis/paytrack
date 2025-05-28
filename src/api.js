const axios = require('axios');

const API_URL = 'https://dataprovider.paytrack.com.br/data?view=view_colaboradores_teste_tecnico';
const AUTH_HEADER = 'Basic MjU4Mzg1NDc4NjA0NGU0YThkNDc5MWIzOTlhYTg4YWI6MGUwMWYwNDc1MzRiNGNjOGJlZjg5OWMwM2U8ZGQ2OGY=';

async function fetchData() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'Authorization': AUTH_HEADER,
        'Cookie': 'JSESSIONID=DFB0A1EB06770A374497CA40069CB873'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(`Erro na API: ${error.message}`);
  }
}