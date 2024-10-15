CREATE OR REPLACE PROCEDURE sp_insert_pago(
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
    INSERT INTO "Pago" ("id_Pago", "id_Reserva", "Monto", "Método_Pago", "Fecha_Pago", "Estado", "Actualiza")
    VALUES (p_id_Pago, p_id_Reserva, p_Monto, p_Método_Pago, p_Fecha_Pago, p_Estado, p_Actualiza);
END;
$$;
