import axios from 'axios';

export async function getContractInfoData(requestUrl: string) {
  const result = await axios
    .get(requestUrl)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
  return result;
}

export async function setContractInfoData(requestUrl: string, params: object) {
  const result = await axios
    .get(requestUrl)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
  return result;
}
