import { Client } from "basic-ftp"
import { Exception } from "@fasteerjs/exceptions"

const createClient = async (): Promise<Client> => {
  const client = new Client()

  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASS,
    })
  } catch {
    // Connection error
    throw new Exception()
  }

  return client
}

export { createClient }
