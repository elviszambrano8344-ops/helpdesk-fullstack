import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    obtenerTickets();
  }, []);

  const obtenerTickets = async () => {
    try {
      const respuesta = await api.get("/tickets");
      setTickets(respuesta.data);
    } catch (error) {
      console.error("Error al obtener los tickets:", error);
    }
  };

  const abiertos = tickets.filter(
    (ticket) => ticket.estado === "Abierto"
  ).length;

  const cerrados = tickets.filter(
    (ticket) => ticket.estado === "Cerrado"
  ).length;

  return (
    <div
      style={{
        padding: "30px",
        textAlign: "center",
      }}
    >
      <h1>Bienvenido al HelpDesk</h1>

      <p>
        Sistema para la gestión de incidentes utilizando React, Node.js y
        MongoDB.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#198754",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h2>{tickets.length}</h2>
          <p>Tickets registrados</p>
        </div>

        <div
          style={{
            background: "#ffc107",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h2>{abiertos}</h2>
          <p>Abiertos</p>
        </div>

        <div
          style={{
            background: "#dc3545",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h2>{cerrados}</h2>
          <p>Cerrados</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;