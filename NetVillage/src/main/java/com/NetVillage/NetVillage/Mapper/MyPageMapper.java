package com.NetVillage.NetVillage.Mapper;

import com.NetVillage.NetVillage.Model.UserInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface MyPageMapper {

    //비밀번호 변경
    @Update("update user_info set user_pw = #{user_pw} where user_id = #{user_id}")
    public int userUpdate(UserInfo editInfo);

}
