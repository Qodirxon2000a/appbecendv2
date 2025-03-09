import { workers } from "../../data/workers";

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(workers);
  }

  if (req.method === "POST") {
    const { name, lavozim } = req.body;
    const newWorker = { id: Date.now().toString(), name, lavozim };
    workers.push(newWorker);
    return res.status(201).json(newWorker);
  }

  if (req.method === "PUT") {
    const { id } = req.query;
    const { name, lavozim } = req.body;
    const index = workers.findIndex((w) => w.id === id);
    if (index === -1) return res.status(404).json({ error: "Worker not found" });

    workers[index] = { ...workers[index], name, lavozim };
    return res.status(200).json(workers[index]);
  }

  if (req.method === "DELETE") {
    const { id } = req.query;
    const index = workers.findIndex((w) => w.id === id);
    if (index === -1) return res.status(404).json({ error: "Worker not found" });

    workers.splice(index, 1);
    return res.status(204).end();
  }

  res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
