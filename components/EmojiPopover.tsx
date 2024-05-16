import { Button } from "@/components/ui/button"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { EmojiArray } from "@/lib/emoji"
import Image from "next/image"
import { MdEmojiEmotions } from "react-icons/md"

export function EmojiPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
            <MdEmojiEmotions size={'24px'}/>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex gap-4 flex-wrap items-center">
            {
                EmojiArray.map((emoji, index) => {
                    return (
                        <div>
                            <Image
                                src={emoji.src}
                                alt={emoji.alt}
                                width={35}
                                height={45}
                            />
                        </div>
                    )
                })
            }
        </div>
      </PopoverContent>
    </Popover>
  )
}
