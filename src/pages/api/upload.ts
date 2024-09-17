import { NextApiRequest, NextApiResponse } from "next";
import multiparty from "multiparty";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form = new multiparty.Form();
  form.parse(req, (err, fields, files) => {
    console.log(files.files);
    console.log(fields);
    
    res.json("ok");
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
