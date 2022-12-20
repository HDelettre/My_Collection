export const fetchCreateModel = async (modelData) => {
  console.log('fetchAddModel: ', modelData)
  try {
    const reponse = await fetch (`${process.env.REACT_APP_API_MODEL}diecast`, {
      method: 'POST',
      body: JSON.stringify(modelData),
      headers: {"Content-Type": "application/json"}
    });
    console.log('Reponse from Fetch: ', reponse)
    return reponse;
  } catch (error) {
    console.log(error)
    return error;
  };
}