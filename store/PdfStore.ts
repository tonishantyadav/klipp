import { create } from 'zustand'

interface PdfState {
  numPages: number
  currentPage: number
  scale: number
  isLoading: boolean
  setNumPages: (numPages: number) => void
  setCurrentPage: (currentPage: number) => void
  setScale: (scale: number) => void
  setIsLoading: (isLoading: boolean) => void
}

export const usePdfStore = create<PdfState>((set) => ({
  numPages: 0,
  currentPage: 1,
  scale: 1,
  isLoading: true,
  setNumPages: (numPages) => set({ numPages }),
  setCurrentPage: (currentPage) => set({ currentPage }),
  setScale: (scale) => set({ scale }),
  setIsLoading: (isLoading) => set({ isLoading }),
}))
