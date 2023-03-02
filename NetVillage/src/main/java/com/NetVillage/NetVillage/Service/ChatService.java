package com.NetVillage.NetVillage.Service;

import com.NetVillage.NetVillage.Mapper.ChatMapper;
import com.NetVillage.NetVillage.Model.Chatroom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Map;

@Service
public class ChatService {

    @Autowired
    ChatMapper chatMapper;

    public List<Chatroom> ChatRoomList(String user_nick) {
        return chatMapper.ChatRoomList(user_nick);
    }

    public void ChatSendMsg(String nick, String msg) {
        chatMapper.ChatSendMsg(nick, msg);
    }
}
