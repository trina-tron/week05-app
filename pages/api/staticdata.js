// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import path from 'path';
import { promises as fs } from 'fs';

const dataDir = path.join(process.cwd(), "data");

export default function handler(req, res) {
 
  const filepath = path.join(dataDir, "owner.json");
  
  const jsondata = fs.readFile(filepath, 'utf8');
  
  const jsonObj=JSON.parse(jsondata);

  jsonObj.sort(
    function(a,b){
      return a.name.localeCompare(b.name);
    }
  );
  res.status(200).json(jsonObj);
}
