CREATE TABLE "Pais" (
	"id_Pais" UUID NOT NULL UNIQUE,
	"Nombre" VARCHAR,
	"Activo" BIT,
	"Actualiza" TIMESTAMP,
	PRIMARY KEY("id_Pais")
);


