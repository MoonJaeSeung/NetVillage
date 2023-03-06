package com.NetVillage.NetVillage.Mapper;

import com.NetVillage.NetVillage.Model.UserInfo;
import org.apache.ibatis.annotations.*;

@Mapper
public interface UserMapper {

    @Insert("insert into user_info (user_id, user_pw, user_name, user_gender, user_nick) values(#{user_id},#{user_pw},#{user_name},#{user_gender},#{user_nick})")
    public int signUser(UserInfo join);

    @Select("select count(user_id) from user_info where user_id=#{user_id}")
    public int checkId(UserInfo checkid);

    @Select("select count(user_nick) from user_info where user_nick=#{user_nick}")
    public int checkNick(UserInfo checknick);

    @Select("select * from user_info where user_id=#{user_id}")
    public UserInfo loginUser(UserInfo login);

//    @Update("update user_info set user_pw=#{user_pw}, user_name=#{user_name}, user_phone=#{user_phone}, region=#{region}, user_nick=#{user_nick} where user_id=#{user_id}")
//    public int updateUser(UserInfo update);

    @Delete("delete from user_info where user_id=#{user_id}")
    public int deleteUser(UserInfo delete);
}
