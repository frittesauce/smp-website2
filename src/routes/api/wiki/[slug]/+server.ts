import { db } from '$lib/server/db';
import { infoboxes, pages } from '$lib/server/db/schema';
import { json, type RequestHandler } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const GET: RequestHandler = async ({ params }: { params: { slug: string } }) => {
  const slug: string = params.slug;

  try {
    const [page] = await db.select().from(pages).where(eq(pages.slug, slug)).leftJoin(infoboxes, eq(infoboxes.id, pages.infobox_id)).limit(1);

    if (!page) {
      return json({ error: "page doesnt exist!" }, { status: 404 });
    }

    return json({ ...page })

  } catch (er) {
    return json({ error: "something went wrong on the backend!" }, { status: 400 })

  }
};
