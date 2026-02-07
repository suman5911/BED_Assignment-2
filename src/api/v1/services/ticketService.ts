import { tickets } from "../../../data/tickets";

export type TicketPriority = "critical" | "high" | "medium" | "low";
export type TicketStatus = "open" | "in-progress" | "resolved";

/**
 * Represents a support ticket within the ticket tracking system.
 */
export interface Ticket {
  id: number;
  title: string;
  description: string;
  priority: TicketPriority;
  status: TicketStatus;
  createdAt: string;
}

/**
 * Creates a new support ticket and adds it to the ticket list.
*/
export const createTicket = (
  title: string,
  description: string,
  priority: TicketPriority
): Ticket => {
  const now = new Date().toISOString();

  const newTicket: Ticket = {
    id: tickets.length > 0 ? Math.max(...tickets.map((t) => t.id)) + 1 : 1,
    title,
    description,
    priority,
    status: "open",
    createdAt: now,
  };

  tickets.push(newTicket);
  return newTicket;
};

/**
 * Retrieves all tickets from the ticket list.
*/
export const getAllTickets = (): Ticket[] => {
  return tickets;
};

/**
 * Retrieves a single ticket by its ID.
*/
export const getTicketById = (id: number): Ticket | undefined => {
  return tickets.find((t) => t.id === id);
};