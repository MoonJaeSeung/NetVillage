package com.NetVillage.NetVillage.Mapper;

import com.NetVillage.NetVillage.Model.Chatroom;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.Collection;
import java.util.List;
import java.util.Map;

@Mapper
public interface ChatMapper {

    @Select("select * from chatroom where user_nick1=#{user_nick}")
    public List<Chatroom> ChatRoomList(String user_nick);

    @Insert("insert into chatcontent values(null, '1', '1', #{nick}, #{msg}, now())")
    public void ChatSendMsg(String nick, String msg);

}
