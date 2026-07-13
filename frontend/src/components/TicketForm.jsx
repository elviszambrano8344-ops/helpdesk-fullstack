import { useState, useEffect } from "react";
import api from "../services/api";

function TicketForm({ ticketEditar, setTicketEditar }) {
  const [ticket, setTicket] = useState({
    titulo: "",
    descripcion: "",
    categoria: "",
    prioridad: "",
    estado: "Abierto",
  });

  useEffect(() => {
    if (ticketEditar) {
      setTicket(ticketEditar);
    }
  }, [ticketEditar]);

  const handleChange = (e) => {
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (ticketEditar) {
        await api.put(`/tickets/${ticketEditar._id}`, ticket);

        alert("Ticket actualizado correctamente.");

        setTicketEditar(null);
      } else {
        await api.post("/tickets", ticket);

        alert("Ticket registrado correctamente.");
      }

      setTicket({
        titulo: "",
        descripcion: "",
        categoria: "",
        prioridad: "",
        estado: "Abierto",
      });

      window.location.reload();

    } catch (error) {
      console.error(error);
      alert("Ocurrió un error.");
    }
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2>
        {ticketEditar ? "Editar Ticket" : "Registrar Incidente"}
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={ticket.titulo}
          onChange={handleChange}
          required
          style={{ width: "320px", padding: "8px" }}
        />

        <br /><br />

        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={ticket.descripcion}
          onChange={handleChange}
          required
          style={{ width: "320px", height: "90px", padding: "8px" }}
        />

        <br /><br />

        <input
          type="text"
          name="categoria"
          placeholder="Categoría"
          value={ticket.categoria}
          onChange={handleChange}
          required
          style={{ width: "320px", padding: "8px" }}
        />

        <br /><br />

        <select
          name="prioridad"
          value={ticket.prioridad}
          onChange={handleChange}
          required
          style={{ width: "340px", padding: "8px" }}
        >
          <option value="">Seleccione prioridad</option>
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>

        <br /><br />

        <button
          type="submit"
          style={{
            background: ticketEditar ? "#ffc107" : "#0d6efd",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {ticketEditar ? "Actualizar Ticket" : "Registrar Ticket"}
        </button>

      </form>
    </div>
  );
}

export default TicketForm;