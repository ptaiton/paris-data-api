import { parseStringPromise as parseString } from 'xml2js'

interface Ixml {
  import: {
    [key: string]: {
      uniqueID: string[]
      name: string[]
      value: string[]
    }[]
  }
}

export default async (file: Buffer) => {
  try {
    const xml: Ixml = await parseString(file.toString())
    console.log(xml)
    const parsedXML = Object.values(xml.import)[0].map((event: any) => ({
      id: event.uniqueID[0],
      name: event.name[0],
      value: event.value[0],
    }))

    console.log(parsedXML)
  } catch (err) {
    console.log(err)
  }
  /*{
    id:
    name:
    value:
  }*/
}