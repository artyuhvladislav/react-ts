const URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchMonsters = async () => {
  try {
    const data = await fetch(URL);
    if (data.status !== 200) {
      throw new Error('failed to load bad url');
    }
    return await data.json();
  } catch (err) {
    console.error(err.message);
  }
};
