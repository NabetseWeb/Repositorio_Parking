CREATE OR REPLACE PROCEDURE sp_delete_parking(
    p_id_Parqueadero UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM "Parking"
    WHERE "id_Parqueadero" = p_id_Parqueadero;
END;
$$;
