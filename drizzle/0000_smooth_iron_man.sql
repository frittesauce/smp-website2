CREATE TABLE "infoboxes" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"image_url" text,
	"data" jsonb
);
--> statement-breakpoint
CREATE TABLE "pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"infobox_id" integer
);
--> statement-breakpoint
ALTER TABLE "pages" ADD CONSTRAINT "pages_infobox_id_infoboxes_id_fk" FOREIGN KEY ("infobox_id") REFERENCES "public"."infoboxes"("id") ON DELETE cascade ON UPDATE no action;