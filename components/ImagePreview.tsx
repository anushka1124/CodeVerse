import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export function ImagePreview(
  { selectedFile, 
    close, 
    imageChange, 
    setFlag } : {
                  selectedFile: string, 
                  close: () => void, 
                  imageChange: any, 
                  setFlag: any
                }
) {
  return (
    <Dialog open={!!selectedFile}>
    <DialogContent onInteractOutside={close} className="sm:max-w-[425px] bg-white max-w-xl flex flex-col">
      <DialogHeader>
        <div className="flex items-center relative h-3/4 my-auto">
          <Image
            src={selectedFile}
            alt="selected File"
            width={400}
            height={400}
            className="rounded-md border mx-auto border-gray-400 object-contain"
          />
        </div>
      </DialogHeader>
      
      <DialogFooter className="mx-auto flex items-center">
        <DialogClose asChild>
          <Button variant={'destructive'} onClick={close} size={'sm'}>Cancle</Button>
        </DialogClose>
        <Button onClick={imageChange} size={'sm'}>Change</Button>
        <Button onClick={() => setFlag(true)} size={'sm'}>Next</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}

export default ImagePreview;
