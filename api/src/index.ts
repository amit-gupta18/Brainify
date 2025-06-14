import express from "express";
const app = express();
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { z } from "zod/v4";
import { ContentModel, LinksModel, UserModel } from "./db";
import dotenv from 'dotenv';
import userMiddleware from "./middleware";
import { random } from "./utils";
import { randomString } from "zod/dist/types/v4/core/util";

// Extend Express Request type to include userId
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

dotenv.config();
app.use(express.json());

// jwt.generate("token");
app.post("/api/v1/signup", async (req, res) => {
    // zod validation and hash the password . 

    const username = req.body.username;
    const password = req.body.password;
    // use zod validation here for the checking 
    try {
        await UserModel.create({
            username: username,
            password: password
        })
        res.json({
            message: "User signed up !"
        })

    } catch (err) {
        res.status(411).json({
            message: "error occured : " + err,
        })
    }

})

app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await UserModel.findOne({
        username,
        password
    });

    if (user) {
        if (!process.env.JWT_SECRET_KEY) {
            throw new Error('JWT SECRET KEY NOT FOUND');
        }
        const token = jwt.sign({
            id: user._id,
        }, process.env.JWT_SECRET_KEY);
        // You may want to return the token as a response
        res.json({ token });
    } else {
        res.status(401).json({ message: "Invalid username or password" });
    }

})

app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const link = req.body.link;
    // const type = req.body.type;
    const title = req.body.title;
    // the error is  cannot set headers after they are sent to the client . 

    await ContentModel.create({
        link,
        title,
        tags: [],
        // @ts-ignore
        userId: req.userId,
    })
    res.json({
        message: "Content created successfully",
    });
})

app.get("/api/v1/content", userMiddleware, async (req, res) => {
    // @ts-ignore
    const userId = req.userId;

    console.log("control reached here");
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        content
    })
})

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;
    await ContentModel.deleteMany({
        contentId,
        // @ts-ignore
        userId: req.userId
    })
    res.json({
        message: "deleted"
    })
})

app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    console.log("control reached here");
    const { share } = req.body;
    console.log("Share status:", share);
    if (share) {
        const existingLink = await LinksModel.findOne({ userId: req.userId });
        if (existingLink) {
            res.json({ hash: existingLink.hash }); 
            return;
        }
        const hash = random(10);
        await LinksModel.create({ userId: req.userId, hash });
        res.json({ hash });
    } else {
        // Remove the shareable link if share is false.
        await LinksModel.deleteOne({ userId: req.userId });
        res.json({ message: "Removed link" });
    }
});

app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;
    const link = await LinksModel.findOne({
        hash: hash
    })
    if (!link) {
        res.status(411).json({
            message: "Incorrect Input"
        })
    }
    const content = await ContentModel.find({
        userId: link?.userId,

    })
    const user = await UserModel.findOne({
        _id: link?.userId
    })

    if (!link) {
        res.status(411).json({
            message: "Incorrect Input"
        })
    }

    res.json({
        username: user?.username,
        content: content
    })
})



const PORT = 3000;
app.listen(PORT, function (): void {
    console.log(`App is running on the port : ${PORT}`);
})

console.log("This is a typescript app. ");