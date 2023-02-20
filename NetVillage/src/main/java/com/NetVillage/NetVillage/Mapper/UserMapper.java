package com.NetVillage.NetVillage.Mapper;

import com.NetVillage.NetVillage.Model.UserVo;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

    @Insert("insert into user_info values(#{user_id},#{user_pw},#{user_name},#{user_phone},#{region},#{user_gender},#{user_nick},'null',0,0,0)")
    public int signUser(UserVo join);



    @Select("select * from user_info where user_id=#{user_id}")
    public UserVo loginUser(UserVo login);
}
