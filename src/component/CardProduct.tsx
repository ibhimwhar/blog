interface Products {
    image: string
    category: string
    readTime: string
    title: string
    authorName: string
    authorAvatar: string
    authorPostedAt: string
}

import { useEffect, useState } from "react"

const CardProduct = ({
    image,
    category,
    readTime,
    title,
    authorName,
    authorAvatar,
    authorPostedAt,
}: Products) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 800)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="rounded-md border-3 border-neutral-100 overflow-hidden p-4 space-y-4">
            {isLoading ? (
                <div className="w-full md:h-[48vh] lg:h-[38vh] bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-md animate-pulse" />
            ) : (
                <img
                    src={image}
                    alt={title}
                    className="w-full md:h-[48vh] lg:h-[38vh] object-cover rounded-md"
                />
            )}

            <div className="flex justify-between items-center gap-2 text-[12px]">
                <span className="bg-neutral-100 text-black px-4 py-2 rounded-full">
                    {category}
                </span>
                <span className="text-neutral-500">{readTime}</span>
            </div>

            <p className="text-xl font-semibold">{title}</p>

            <div className="flex items-center gap-3">
                <img
                    src={authorAvatar}
                    alt={authorName}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-sm">
                    <h2 className="font-medium">{authorName}</h2>
                    <h4 className="text-neutral-400">{authorPostedAt}</h4>
                </div>
            </div>
        </div>
    )
}

export default CardProduct
