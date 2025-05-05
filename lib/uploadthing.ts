import { OurFileRouter} from "@/app/api/uploadthing/core"
import { generateReactHelpers } from "@uploadthing/react"

generateReactHelpers

export const { useUploadThing} = generateReactHelpers<OurFileRouter>()  