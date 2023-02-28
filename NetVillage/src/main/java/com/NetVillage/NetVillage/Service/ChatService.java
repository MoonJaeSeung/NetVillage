package com.NetVillage.NetVillage.Service;

import com.NetVillage.NetVillage.Mapper.ChatMapper;
import com.NetVillage.NetVillage.Model.Chatroom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatService {

    @Autowired
    ChatMapper chatMapper;

    public List<Chatroom> ChatRoomList(String nick) {
        return chatMapper.ChatRoomList(nick);
    }

    public void ChatSendMsg(String nick, String msg) {
        chatMapper.ChatSendMsg(nick, msg);
    }
}
