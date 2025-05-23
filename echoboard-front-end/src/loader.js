// In the same file or a separate loader.js
import axios from 'axios';

export async function articleLoader({ params }) {
  const response = await axios.get(`/api/articles/${params.name}`);
  const { upvotes, comments } = response.data;
  return { upvotes, comments };
}
