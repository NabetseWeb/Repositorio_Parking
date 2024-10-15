CREATE OR REPLACE PROCEDURE sp_delete_pago(
    p_id_Pago UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM "Pago"
    WHERE "id_Pago" = p_id_Pago;
END;
$$;
