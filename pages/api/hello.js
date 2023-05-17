export default function handler(req, res) {
    console.log("ABC ");
    console.log(req.method);
   console.log(req.body);
   console.log(req.query);
   console.log(req.headers);
    res.status(200).json({ text: 'Hello tri 3' });
  }
