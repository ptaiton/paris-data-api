import { Request, Response } from 'express'
import { createWriteStream, readFileSync, unlink as removeFile } from 'fs'
import { v4 as generateUuid } from 'uuid'
import xmlReaderService from '../services/xmlReaderService';

export const handleFileUpload = (req: Request, res: Response) => {
  let fstream;
  req.pipe(req.busboy)
  req.busboy.on('file', (fieldname, file, filename) => {
    const generatedFilename = `${new Date().getTime()}_${generateUuid()}_${filename}`

    fstream = createWriteStream('upload/' + generatedFilename)
    file.pipe(fstream);
    fstream.on('close', () => {
      const file = readFileSync('upload/' + generatedFilename)
      xmlReaderService(file)
      removeFile('upload/' + generatedFilename, () => {})
      res.sendStatus(200); 
    })
  })
}