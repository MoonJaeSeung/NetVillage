package com.NetVillage.NetVillage.Service;

import com.NetVillage.NetVillage.Mapper.MyPageMapper;
import com.NetVillage.NetVillage.Model.TbMatch;
import com.NetVillage.NetVillage.Model.UserInfo;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MyPageService {


    //Gson 호출
    Gson gson = new Gson();

    //Mapper 호출
    @Autowired
    MyPageMapper myPageMapper;

    //비밀번호 암호화
    @Autowired
    private PasswordEncoder passwordEncoder;

    //비밀번호 변경
    public int userUpdate(UserInfo editInfo){

        editInfo.setUser_pw(passwordEncoder.encode(editInfo.getUser_pw()));

        return myPageMapper.userUpdate(editInfo);
//        return 1;
    }

    //회원탈퇴
    public int userDelete(UserInfo deleteInfo){
        boolean result = passwordEncoder.matches(deleteInfo.getUser_pw(), myPageMapper.userCK(deleteInfo));

        if(result == true){
            //비밀번호가 일치하면 회원정보 삭제
            return myPageMapper.userDelete(deleteInfo);
        } else {
            return 0;
        }

    }

    //경기 승패 입력
    public List<TbMatch> matchResult(String user_nick){

        return myPageMapper.matchResult(user_nick);

    }


}
