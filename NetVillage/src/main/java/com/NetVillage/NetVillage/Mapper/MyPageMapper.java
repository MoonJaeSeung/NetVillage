package com.NetVillage.NetVillage.Mapper;

import com.NetVillage.NetVillage.Model.TbMatch;
import com.NetVillage.NetVillage.Model.UserInfo;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

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

    //승패 결과 입력할 거 있나 조회
    @Select("select * from tb_match where user_nick1 = #{user_nick} or user_nick2 = #{user_nick}")
    public List<TbMatch> matchResult(String user_nick);

}
