SELECT
    P."id_Pais" AS id_Pais,
    P."Nombre" AS Nombre_Pais,
    D."id_Departamento" AS id_Departamento,
    D."Nombre" AS Nombre_Departamento,
    C."id_Ciudad" AS id_Ciudad,
    C."Nombre" AS Nombre_Ciudad
FROM "Pais" P
    INNER JOIN "Departamento" D
        ON P."id_Pais" = D."Id_Pais"
    INNER JOIN "Ciudad" C
        ON D."id_Departamento" = C."Id_departamento"
WHERE 
    P."Activo" = B'1'
    AND D."Activo" = B'1'
    AND C."Activo" = B'1';


SELECT 
    json_agg(
        json_build_object(
            'IdPais', P."id_Pais",
            'NombrePais', P."Nombre",
            'IdDepartamento', D."id_Departamento",
            'NombreDepartamento', D."Nombre",
            'IdCiudad', C."id_Ciudad",
            'NombreCiudad', C."Nombre"
        )
    ) AS result
FROM "Pais" P
INNER JOIN "Departamento" D
    ON P."id_Pais" = D."Id_Pais"
INNER JOIN "Ciudad" C
    ON D."id_Departamento" = C."Id_departamento"
WHERE 
    P."Activo" = B'1'
    AND D."Activo" = B'1'
    AND C."Activo" = B'1';
