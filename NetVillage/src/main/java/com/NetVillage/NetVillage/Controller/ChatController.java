package com.NetVillage.NetVillage.Controller;

import com.NetVillage.NetVillage.Model.Chatroom;
import com.NetVillage.NetVillage.Service.ChatService;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;
import java.util.Map;

@RequestMapping("/socket/chat")
@RestController
public class ChatController {

    @Autowired
    ChatService chatService;

    @PostMapping("/roomlist")
    public List<Chatroom> ChatRoomList(@RequestBody Map<String, String> nick){
        String user_nick = nick.get(nick);
        System.out.println("가져오는 닉네임"+ user_nick);
        System.out.println("가져오는값"+chatService.ChatRoomList(user_nick));
        return chatService.ChatRoomList(user_nick);
    }

    @PostMapping("/sendMsg")
    public void ChatSendMsg(String nick, String msg){
        chatService.ChatSendMsg(nick, msg);
    }
}
