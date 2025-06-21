import { DocumentsIcon } from "../icons/DocumentsIcon";
import { LinksIcon } from "../icons/LinksIcon";
import { Logo } from "../icons/Logo";
import { TagIcon } from "../icons/TagIcon";
import { Twitter } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
    return (
        <div>
            <div className="h-full min-h-screen  bg-white border-gray-300 border-r-2  shadow-xl">
                <div className="flex p-4 items-center justify-start gap-3">
                    <Logo />
                    <h1 className="font-bold text-xl">Brainify</h1>
                </div>
                <SidebarItem icon={<Twitter />} text={"Twitter"} />
                <SidebarItem icon={<YoutubeIcon />} text={"Youtube"} />
                <SidebarItem icon={<DocumentsIcon size="lg"/>} text={"Documents"} />
                <SidebarItem icon={<LinksIcon size="lg" />} text={"Links"} />
                <SidebarItem icon={<TagIcon size="lg" />} text={"Tags"} />
            </div>
        </div>
    );
}