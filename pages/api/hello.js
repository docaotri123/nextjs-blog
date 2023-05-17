export default function handler(req, res) {
     console.log({ body: {
      ...req.body
    }});
     res.status(200).json({ body: {
      ...req.body
    }, request: {
      ...req.query
    }});
  }
