export interface WikiPage {
  id: number,
  title: string,
  slug: string,
  content: string,
  created_at: Date,
  updated_at: Date,
}

export interface InfoBox {
  id: number,
  title: string,
  image_url: string,
}
