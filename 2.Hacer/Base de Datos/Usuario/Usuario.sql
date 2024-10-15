CREATE TABLE "Usuario" (
	"id_Usuario" UUID NOT NULL UNIQUE,
	"Nombre" VARCHAR,
	"Email" VARCHAR,
	"Telefono" VARCHAR,
	"Actualiza" TIMESTAMPTZ,
	PRIMARY KEY("id_Usuario")
);