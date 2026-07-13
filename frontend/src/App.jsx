import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";

function App() {
  const [ticketEditar, setTicketEditar] = useState(null);

  return (
    <>
      <Navbar />
      <Dashboard />
      <TicketForm
        ticketEditar={ticketEditar}
        setTicketEditar={setTicketEditar}
      />
      <TicketList
        setTicketEditar={setTicketEditar}
      />
    </>
  );
}

export default App;