import mongoose,{model,Schema,Types} from "mongoose";
import dotenv from "dotenv";
import { required } from "zod/dist/types/v4/core/util";
dotenv.config();
if (!process.env.DATABASE_URI) {
    throw new Error("DATABASE_URI environment variable is not defined");
}
async function connectToDatabase(){
    await mongoose.connect(process.env.DATABASE_URI as string);
}
connectToDatabase();

const UserSchema = new Schema({
    username: { type: String , unique:true },
    password: { type: String }
});

const ContentSchema = new Schema ({
    title : {type : String},
    link : {type : String},
    tags : [{type : Types.ObjectId , ref: "Tag"}],
    userId : {type : Types.ObjectId , ref: "User" , required : true}
});
 
const TagsSchema = new Schema({
    title : {type : Types.ObjectId}
});

const LinkSchema = new Schema({
    hash : {type : String},
    userId : { type: Types.ObjectId, ref: "User" , required: true , unique:true},
})

const UserModel = model('User', UserSchema);
const ContentModel = model('Content', ContentSchema);
const TagsModel = model('Tag', TagsSchema);
const LinksModel = model('Links', LinkSchema);
export { UserModel, ContentModel, TagsModel, LinksModel };