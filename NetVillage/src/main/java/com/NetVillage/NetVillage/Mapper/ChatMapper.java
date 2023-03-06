package com.NetVillage.NetVillage.Mapper;

import com.NetVillage.NetVillage.Model.Chatroom;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface ChatMapper {

    @Select("select * from chatroom where user_nick1=#{user_nick} and cr_status='1'")
    public List<Chatroom> ChatRoomList(String user_nick);

    @Insert("insert into chatroom values(null, #{board_idx}, #{user_nick1}, now(), #{user_nick2}, 1)")
    public void NewChatRoom(HashMap<String, String> map);

    @Insert("insert into chatcontent values(null, #{cr_idx}, #{board_idx}, #{talker}, #{msg}, now())")
    public void ChatSendMsg(HashMap<String, String> msg);

}
