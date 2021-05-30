import { Project } from ".prisma/client"
import { MultipartFile } from "fastify-multipart"
import { unserialize as unserializePhp, serialize as serializePhp } from "php-serialize"
import { createClient } from "./ftp"
import path from "path"

const allowedTypes = ["image/bmp", "image/gif", "image/jpeg", "image/svg+xml", "image/tiff"]

const processMultipartProject = async (
  project: Project,
  parts: AsyncIterableIterator<MultipartFile>
): Promise<string[]> => {
  const client = await createClient()

  let newLinks = unserializePhp(project.images)

  for await (const part of parts) {
    if (part.file) {
      // TODO: better way of handling this
      if (!allowedTypes.includes(part.mimetype)) {
        // error out
        continue
      }

      const url = `${process.env.FTP_PUBLIC_DIR ?? "/public"}/${path.parse(part.filename).base}`

      try {
        await client.uploadFrom(part.file as any, url)
        newLinks.push(url)
      } catch {
        // TODO: error out
        continue
      }
    }
  }

  client.close()

  return newLinks
}

export { processMultipartProject, allowedTypes }
