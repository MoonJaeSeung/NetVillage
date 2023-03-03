package com.NetVillage.NetVillage.Controller;

import com.NetVillage.NetVillage.Model.Chatroom;
import com.NetVillage.NetVillage.Service.ChatService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping("/socket/chat")
@RestController
public class ChatController {

    @Autowired
    ChatService chatService;

    Gson gson = new Gson();

    @PostMapping("/roomlist")
    public String ChatRoomList(@RequestBody Map<String, String> data){
        String user_nick = data.get("nick");
        System.out.println(data);
        List<Chatroom> myChatList = chatService.ChatRoomList();
        System.out.println("로그인 중인 닉네임 : "+ user_nick);
        System.out.println("채팅방 목록 : "+myChatList);
        return gson.toJson(myChatList);
    }

    @PostMapping("/sendMsg")
    public void ChatSendMsg(String nick, String msg){
        chatService.ChatSendMsg(nick, msg);
    }
}
