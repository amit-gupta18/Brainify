export const Input = () => {
    return (
        <div>
            <div className="flex flex-col justify-start items-start space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="title">Enter The Title:</label>
                    <input
                        className="border-blue-400 border-2 rounded-md"
                        id="title"
                        type="text"
                        placeholder="Title"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="link">Enter The Link:</label>
                    <input
                        className="border-blue-400 border-2 rounded-md"
                        id="link"
                        type="text"
                        placeholder="Link"
                    />
                </div>
                <div className="flex flex-col">
                    <span>Select Type:</span>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="type" value="twitter" />
                        <span>Twitter</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="type" value="youtube" />
                        <span>YouTube</span>
                    </label>
                </div>
            </div>
        </div>
    );
};