import { useEffect, useState } from "react";
import api from "../services/api";

function TicketList({ setTicketEditar }) {
  const [tickets, setTickets] = useState([]);

  const obtenerTickets = async () => {
    try {
      const respuesta = await api.get("/tickets");
      setTickets(respuesta.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    obtenerTickets();
  }, []);

  const eliminarTicket = async (id) => {
    const confirmar = window.confirm(
      "¿Está seguro de eliminar este ticket?"
    );

    if (!confirmar) return;

    try {
      await api.delete(`/tickets/${id}`);

      alert("Ticket eliminado correctamente.");

      obtenerTickets();

    } catch (error) {
      console.error(error);
      alert("Error al eliminar.");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ textAlign: "center" }}>
        Listado de Tickets
      </h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th>Título</th>
            <th>Categoría</th>
            <th>Prioridad</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket._id}>
              <td>{ticket.titulo}</td>
              <td>{ticket.categoria}</td>
              <td>{ticket.prioridad}</td>
              <td>{ticket.estado}</td>

              <td>

                <button
                  onClick={() => setTicketEditar(ticket)}
                  style={{
                    background: "#ffc107",
                    border: "none",
                    padding: "8px 12px",
                    marginRight: "10px",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                >
                  Editar
                </button>

                <button
                  onClick={() => eliminarTicket(ticket._id)}
                  style={{
                    background: "#dc3545",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                >
                  Eliminar
                </button>

              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TicketList;