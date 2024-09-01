import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  if (typeof url !== 'string') {
    return res.status(400).json({ error: 'URL parameter must be a string' });
  }

  try {
    const response = await axios.get<ArrayBuffer>(url, {
      responseType: 'arraybuffer'
    });

    const contentType = response.headers['content-type'];
    res.setHeader('Content-Type', contentType);
    res.send(Buffer.from(response.data));
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).json({ error: 'Failed to fetch image' });
  }
}
