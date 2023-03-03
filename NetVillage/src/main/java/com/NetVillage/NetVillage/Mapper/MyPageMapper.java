package com.NetVillage.NetVillage.Mapper;

import com.NetVillage.NetVillage.Model.UserInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface MyPageMapper {


    //닉네임 중복 확인
    @Select("select user_nick from user_info where user_nick = #{user_nick}")
    public String nickCk(String user_nick);

    @Update("update user_info SET user_pw = #{user_pw}, user_nick = #{user_nick} WHERE user_id = #{user_id}")
    public int userUpdate(UserInfo editInfo);

}
