package com.NetVillage.NetVillage.Mapper;

import com.NetVillage.NetVillage.Model.Chatroom;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface ChatMapper {

    @Select("select * from chatroom")
    public List<Chatroom> ChatRoomList();

    @Insert("insert into chatcontent values(null, '1', '1', #{nick}, #{msg}, now())")
    public void ChatSendMsg(String nick, String msg);

}
