package com.NetVillage.NetVillage.Service;

import com.NetVillage.NetVillage.Mapper.ChatMapper;
import com.NetVillage.NetVillage.Model.Chatroom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class ChatService {

    @Autowired
    ChatMapper chatMapper;

    public List<Chatroom> ChatRoomList(String user_nick) {
        return chatMapper.ChatRoomList(user_nick);
    }

    public void NewChatRoom(HashMap<String, String> map) {
        chatMapper.NewChatRoom(map);
    }

    public void ChatSendMsg(HashMap<String, String> msg) {
        chatMapper.ChatSendMsg(msg);
    }
}
