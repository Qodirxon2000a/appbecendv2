let data = [{'createdAt': '2025-03-01T12:20:34.595Z', 'id': '1', 'ishchilar': ['Avaz'], 'obyekt': 'Dom', 'ishTuri': '150000', 'sana': '2000-10-10'}];

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(data);
    } else if (req.method === "POST") {
        const newItem = { id: Date.now().toString(), ...req.body };
        data.push(newItem);
        res.status(201).json(newItem);
    } else if (req.method === "PUT") {
        const index = data.findIndex(item => item.id === req.body.id);
        if (index !== -1) {
            data[index] = { ...data[index], ...req.body };
            res.status(200).json(data[index]);
        } else {
            res.status(404).json({ message: "Item not found" });
        }
    } else if (req.method === "DELETE") {
        data = data.filter(item => item.id !== req.body.id);
        res.status(200).json({ message: "Deleted successfully" });
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
};
