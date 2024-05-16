'use server'
import { Message, MessageDocument } from '@/models/message.model';
import { auth, signOut } from '../auth';
import { redirect } from "next/navigation";
import { Chat } from '@/models/chat.model';
import {v2 as cloudinary} from 'cloudinary';
import connectDatabase from './db';
import { revalidatePath } from 'next/cache';

//module level server actions
export const logoutHandler = async() => {
    try {
        await signOut();
    } catch (error) {
        console.log("error in logout",error)
        throw error;
    }
    redirect("/login");
}

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
});

export const sendMessage = async(
    content: string, 
    receiverId: string, 
    messageType: 'text' | 'image'
) => {
    try {
        //error here
        await connectDatabase();
        const authUser = await auth();
        const senderId = authUser?.user?._id;
        console.log("messAge type -> ", messageType)

        let uploadResponse;
        if(messageType === 'image') {
            uploadResponse = await cloudinary.uploader.upload(content, {public_id: "shoe"});
            console.log(uploadResponse);
        }

        const newMessage: MessageDocument = await Message.create({
            senderId,
            receiverId,
            content: uploadResponse?.secure_url || content,
            messageType
        });

        let chat = await Chat.findOne({
            participants: {$all: [senderId, receiverId]}
        });

        if(!chat) {
            chat = await Chat.create({
                participants:[senderId, receiverId],
                messages: [newMessage._id]
            });
        }else {
            chat.messages.push(newMessage._id);
            await chat.save();
        }
        revalidatePath(`/chat/${receiverId}`);
        return JSON.parse(JSON.stringify(newMessage));

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const deleteChat = async (userId: string) => {
    try {
        await connectDatabase();
        const authUser = await auth();
        const user = authUser?.user;
        if(!user) return;

        const chat = await Chat.findOne({
            participants: {$all: [user._id, userId]}
        });
        if(!chat) return;

        const messageIdString = chat.messages.map((id) => id.toString());

        await Message.deleteMany({_id: {$in: messageIdString}});
        await chat.deleteOne({_id: chat._id});
        revalidatePath(`/chat/${userId}`);
    } catch (error) {
        console.log(error);
        throw error;
    }

    redirect('/chat');
}