CREATE OR REPLACE PROCEDURE sp_update_pago(
    p_id_Pago UUID,
    p_id_Reserva UUID,
    p_Monto DECIMAL,
    p_Método_Pago VARCHAR,
    p_Fecha_Pago DATE,
    p_Estado VARCHAR,
    p_Actualiza TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE "Pago"
    SET "id_Reserva" = p_id_Reserva,
        "Monto" = p_Monto,
        "Método_Pago" = p_Método_Pago,
        "Fecha_Pago" = p_Fecha_Pago,
        "Estado" = p_Estado,
        "Actualiza" = p_Actualiza
    WHERE "id_Pago" = p_id_Pago;
END;
$$;
