import axios from 'axios';

const INDEXNOW_API_URL = 'https://api.indexnow.org/indexnow';
const API_KEY = '82c45b999b1e4d1582a207297aad6de9';
const HOST = 'https://portfolio-francisco.netlify.app';

export async function submitURL(url) {
  try {
    const response = await axios.post(INDEXNOW_API_URL, {
      host: HOST,
      key: API_KEY,
      urlList: [url],
      keyLocation: `${HOST}/indexnow_key.txt`
    });
    console.log(`Notificación enviada para ${url}. Respuesta:`, response.data);
  } catch (error) {
    console.error(`Error enviando notificación para ${url}:`, error.response ? error.response.data : error.message);
  }
}