package com.NetVillage.NetVillage.Controller;

import com.NetVillage.NetVillage.Model.Chatroom;
import com.NetVillage.NetVillage.Service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/socket/chat")
@RestController
public class ChatController {

    @Autowired
    ChatService chatService;

    @PostMapping("/roomlist")
    public List<Chatroom> ChatRoomList(@RequestBody String nick){
        System.out.println("가져오는 닉네임"+nick);
        System.out.println("가져오는값"+chatService.ChatRoomList(nick));
        return chatService.ChatRoomList(nick);
    }

    @PostMapping("/sendMsg")
    public void ChatSendMsg(String nick, String msg){
        chatService.ChatSendMsg(nick, msg);
    }
}
