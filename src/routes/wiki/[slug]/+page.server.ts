import { env } from '$env/dynamic/public';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { WikiPage } from '$lib/types/wikiPage';

export const load: PageServerLoad = async ({ params }: { params: { slug: string } }) => {
  const repsonse = await fetch(`${env.PUBLIC_BASE_URL}/api/wiki/${params.slug}`);

  if (repsonse.ok) {
    const page: WikiPage = await repsonse.json();
    return page;
  }

  error(404, {
    message: "page doesnt exist!"
  })

};
