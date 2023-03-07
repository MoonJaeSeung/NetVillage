package com.NetVillage.NetVillage.Mapper;

import com.NetVillage.NetVillage.Model.UserInfo;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface MyPageMapper {

    //비밀번호 변경
    @Update("update user_info set user_pw = #{user_pw} where user_id = #{user_id}")
    public int userUpdate(UserInfo editInfo);

    //회원탈퇴
        //비밀번호 일치 확인
    @Select("select user_pw from user_info where user_id = #{user_id}")
    public String userCK(UserInfo deleteInfo);

        //회원정보 삭제
    @Delete("delete from user_info where user_id = #{user_id}")
    public int userDelete(UserInfo deleteInfo);

}
