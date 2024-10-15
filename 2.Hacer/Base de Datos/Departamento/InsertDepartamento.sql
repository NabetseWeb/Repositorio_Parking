CREATE OR REPLACE PROCEDURE InsertarDepartamento(
    p_Nombre VARCHAR,
    p_Id_Pais UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO "Departamento" ("id_Departamento", "Id_Pais", "Nombre", "Activo", "Actualiza")
    VALUES (gen_random_uuid(), p_Id_Pais, p_Nombre, B'1', CURRENT_TIMESTAMP);
END;
$$;
