import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
    title: string,
    link: string,
    type: "twitter" | "youtube"
}


export function Card({ title, link, type }: CardProps) {
    return (
        <div>
            <div className="bg-white shadow-md outline-slate-200 max-w-72  min-h-48 min-w-72 border rounded-md  border-slate-200">
                <div className="flex justify-between items-center mt-3">
                    <div className="flex justify-center items-center">
                        <div className="px-2 text-gray-600">
                            <ShareIcon size="md" />
                        </div>
                        <span className="font-semibold text-md">
                            {title}
                        </span>
                    </div>
                    <div className="flex  justify-between gap-4 px-2 text-gray-600">
                        <div>
                            <a href={link} target="_blank">
                                <ShareIcon size="md" />
                            </a>
                        </div>
                        <ShareIcon size="md" />
                    </div>
                </div>
                <div className="p-4">
                    <div className="rounded-lg">
                        {type === 'youtube' && <iframe className="w-full  rounded-lg" src={link.replace("watch" , "embed").replace("?v=" , "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                        {type === 'twitter' && <blockquote className="twitter-tweet w-20">
                            <a href={link.replace("x.com" , "twitter.com")} target="_blank"></a>
                        </blockquote>}
                    </div>
                </div>
            </div>

        </div>
    )
}