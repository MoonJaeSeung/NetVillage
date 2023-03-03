package com.NetVillage.NetVillage.Service;

import com.NetVillage.NetVillage.Mapper.MyPageMapper;
import com.NetVillage.NetVillage.Model.UserInfo;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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

    //닉네임 중복 확인
    public String nickCk(String user_nick){
        return myPageMapper.nickCk(user_nick);
    }

    public int userUpdate(UserInfo editInfo){

        editInfo.setUser_pw(passwordEncoder.encode(editInfo.getUser_pw()));

        return myPageMapper.userUpdate(editInfo);
//        return 1;
    }


}
