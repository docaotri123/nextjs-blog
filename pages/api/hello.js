export default function handler(req, res) {
    console.log("ABC ");
    console.log(req);
    res.status(200).json({ text: 'Hello tri 2' });
  }
