import { socialMedia } from "@/data/socialMedia"
import Link from "next/link"

export const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {socialMedia.map((item, idx) => {
        const Icon = item.icon
        return (
          <Link
            key={idx}
            href={item.href}
            className="w-9 h-9 grid place-items-center bg-yellow/10 hover:bg-yellow rounded-full text-yellow hover:text-pink transition-all duration-200 hover:scale-110"
          >
            <Icon width={18} height={18} />
          </Link>
        )
      })}
    </div>
  )
}
