CREATE OR REPLACE PROCEDURE sp_delete_pago(
    p_id_Pago UUID
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE "Pago"
    SET "activo" = false
    WHERE "id_Pago" = p_id_Pago;
END;
$$;
