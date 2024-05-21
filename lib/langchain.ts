import { Pdf } from '@prisma/client'
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'

export const createContext = async (pdf: Pdf) => {
  const response = await fetch(`${pdf.url}`)
  const blob = await response.blob()
  const loader = new PDFLoader(blob)
  const pages = await loader.load()

  const splitIntoChunks = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  })
  const chunks = await splitIntoChunks.splitDocuments(pages)
  return chunks
}
