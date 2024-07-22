import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { token } = req.body;
  if (req.method === 'POST') {
    res.status(200).json({ message: token });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
