package com.NetVillage.NetVillage.Mapper;

import com.NetVillage.NetVillage.Model.UserVo;
import org.apache.ibatis.annotations.*;

@Mapper
public interface UserMapper {

    @Insert("insert into user_info values(#{user_id},#{user_pw},#{user_name},#{user_phone},#{region},#{user_gender},#{user_nick},'null',0,0,0)")
    public int signUser(UserVo join);

    @Select("select count(*) from user_info where user_id=#{user_id}")
    public int checkId(UserVo checkid);

    @Select("select count(*) from user_info where user_nick=#{user_nick}")
    public int checkNick(UserVo checknick);

    @Select("select * from user_info where user_id=#{user_id}")
    public UserVo loginUser(UserVo login);

    @Update("update user_info set user_pw=#{user_pw}, user_name=#{user_name}, user_phone=#{user_phone}, region=#{region}, user_nick=#{user_nick} where user_id=#{user_id}")
    public int updateUser(UserVo update);

    @Delete("delete from user_info where user_id=#{user_id}")
    public int deleteUser(UserVo delete);
}
