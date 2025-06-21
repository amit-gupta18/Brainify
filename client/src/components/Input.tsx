import { useRef } from "react";
import { useState } from "react";
export const Input = () => {
    const titleRef = useRef<any>(null);
    const linkRef = useRef<any>(null);
    const typeRef = useRef<any>(null);
    const [content, setContent] = useState<{ title: string; link: string; type: string }[]>([]);

    function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const type = typeRef.current?.value;

        if (!title || !link) {
            alert("Please fill in all fields");
            return;
        }
        setContent([...content, { title, link, type }]);
        console.log("Title:", title);
        console.log("Link:", link);
        console.log("Type:", type);
        console.log("Content:", [...content, { title, link, type }]);
        localStorage.setItem("content", JSON.stringify([...content, { title, link, type }]));

        if (titleRef.current) titleRef.current.value = '';
        if (linkRef.current) linkRef.current.value = '';
        if (typeRef.current) typeRef.current.checked = false;
    }

    return (
        <div>
            <div className="flex flex-col justify-start items-start space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="title">Enter The Title:</label>
                    <input
                        ref={titleRef}
                        className="border-blue-400 border-2 rounded-md"
                        id="title"
                        type="text"
                        placeholder="Title"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="link">Enter The Link:</label>
                    <input
                        ref={linkRef}
                        className="border-blue-400 border-2 rounded-md"
                        id="link"
                        type="text"
                        placeholder="Link"
                    />
                </div>
                <div className="flex flex-col">
                    <span>Select Type:</span>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="type" value="twitter" ref={typeRef} />
                        <span>Twitter</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="type" value="youtube" ref={typeRef} />
                        <span>YouTube</span>
                    </label>
                </div>
            </div>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 w-full cursor-pointer text-white rounded-md"
                onClick={addContent}
                type="button"
            >
                Add Content
            </button>
        </div>
    );
};