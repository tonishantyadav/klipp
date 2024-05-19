import { create } from 'zustand'

interface PdfUploadState {
  file: File | null
  isUploading: boolean
  isUploadingDone: boolean
  uploadProgress: number
  setFile: (file: File | null) => void
  setIsUploading: (isUploading: boolean) => void
  setIsUploadingDone: (isUploadingDone: boolean) => void
  setUploadProgress: (
    uploadProgress: number | ((progress: number) => number)
  ) => void
}

export const usePdfUploadStore = create<PdfUploadState>((set) => ({
  file: null,
  isUploading: false,
  isUploadingDone: false,
  uploadProgress: 0,
  setFile: (file) => set({ file }),
  setIsUploading: (isUploading) => set({ isUploading }),
  setIsUploadingDone: (isUploadingDone) => set({ isUploadingDone }),
  setUploadProgress: (uploadProgress) =>
    set((state) => ({
      uploadProgress:
        typeof uploadProgress === 'function'
          ? uploadProgress(state.uploadProgress)
          : uploadProgress,
    })),
}))
