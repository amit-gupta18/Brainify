import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./Input";

type CreateContentModalProps = {
    open: boolean;
    onClose: () => void;
};


export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
    if (!open) return null;
    return (
        <div className="w-screen h-screen bg-slate-500/50 fixed top-0 left-0 bg-opacity-50 flex justify-center">
            <div className="flex justify-center items-center opacity-100">
                <span className="bg-white opacity-100 p-4 rounded-lg ">
                    <div className="flex flex-col justify-end">
                        <button className="flex justify-end" onClick={onClose}>
                            <CrossIcon size="lg" />
                        </button>
                        <Input />
                        <button className="bg-blue-500 cursor-pointer rounded mt-4 ">
                            Sumbit
                        </button>
                    </div>
                </span>
            </div>
        </div>
    );
}