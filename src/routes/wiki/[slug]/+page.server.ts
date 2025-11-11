import { env } from '$env/dynamic/public';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { InfoBox, WikiPage } from '$lib/types/wikiPage';

interface Page {
  pages: WikiPage,
  infoboxes: InfoBox,
}

export const load: PageServerLoad = async ({ params }: { params: { slug: string } }) => {
  const repsonse = await fetch(`${env.PUBLIC_BASE_URL}/api/wiki/${params.slug}`);

  if (repsonse.ok) {
    const page: Page = await repsonse.json();
    return page;
  }

  error(404, {
    message: "page doesnt exist!"
  })

};
