
SET check_function_bodies = false;

CREATE TABLE "public"."Movies" ("Id" serial NOT NULL, "Title" text NOT NULL, "PosterUrl" text NOT NULL, "Description" text NOT NULL, PRIMARY KEY ("Id") , UNIQUE ("Id"));

CREATE TABLE "public"."Profile" ("Id" uuid NOT NULL, "Name" text NOT NULL, "Email" text NOT NULL, PRIMARY KEY ("Id") , UNIQUE ("Id"));

CREATE TABLE "public"."Rating" ("ProfileId" uuid NOT NULL, "MovieId" integer NOT NULL, "Rating" integer NOT NULL, PRIMARY KEY ("ProfileId","MovieId") , FOREIGN KEY ("MovieId") REFERENCES "public"."Movies"("Id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("ProfileId") REFERENCES "public"."Profile"("Id") ON UPDATE cascade ON DELETE cascade);

alter table "public"."Movies" add column "Genre" text
 null;
