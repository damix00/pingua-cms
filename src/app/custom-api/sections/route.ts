import configPromise from '@payload-config';
import { NextRequest } from 'next/server';
import { getPayload, Where } from 'payload';
import { stringify } from 'qs-esm';

export const GET = async (req: NextRequest) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const section = req.nextUrl.searchParams.get('section');

  if (!section) {
    return new Response(
      JSON.stringify({
        message: 'No section provided',
      }),
      {
        status: 400,
      },
    );
  }

  const where: Where = {
    section: {
      equals: section,
    },
  };

  const data = await payload.find({
    collection: 'units',
    where,
  });

  return Response.json(data);
};
