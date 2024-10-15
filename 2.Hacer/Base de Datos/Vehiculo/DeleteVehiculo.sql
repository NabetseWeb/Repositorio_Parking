
CREATE OR REPLACE PROCEDURE sp_delete_vehiculo(
    p_id_Vehiculo UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM "Vehiculo"
    WHERE "id_Vehiculo" = p_id_Vehiculo;
END;
$$;
