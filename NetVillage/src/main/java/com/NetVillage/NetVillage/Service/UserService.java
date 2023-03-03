package com.NetVillage.NetVillage.Service;

import com.NetVillage.NetVillage.Mapper.UserMapper;
import com.NetVillage.NetVillage.Model.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserMapper userMapper;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public int signUser(UserInfo join){
        join.setUser_pw(passwordEncoder.encode(join.getUser_pw()));
        return userMapper.signUser(join);
    }

    public int checkId(UserInfo checkid){
        return userMapper.checkId(checkid);
    }

    public int checkNick(UserInfo checknick){
        return userMapper.checkNick(checknick);
    }

    public UserInfo loginUser(UserInfo login){
        passwordEncoder.matches(login.getUser_pw(), userMapper.loginUser(login).getUser_pw());
        return userMapper.loginUser(login);
    }

//    public int updateUser(UserInfo update){
//        update.setUser_pw(passwordEncoder.encode(update.getUser_pw()));
//        return userMapper.updateUser(update);
//    }

    public int deleteUser(UserInfo delete){
        return userMapper.deleteUser(delete);
    }
}
