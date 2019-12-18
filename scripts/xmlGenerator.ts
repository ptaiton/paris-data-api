import {v4 as generateUuid} from 'uuid'
import {writeFile} from "fs"

export default (() => {
  let xml: string = "<import>\n"
  for(let i: number = 0; i < 10e5; i++){
    xml += `<data${i}>
      <uniqueID>${generateUuid()}</uniqueID>
      <name>xml generator ${i}</name>
      <value>${i}</value>
      </data${i}>\n`
  }
  xml += "</import>\n"
  const data = new Uint8Array(Buffer.from(xml));
  writeFile('mock.xml', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
})()