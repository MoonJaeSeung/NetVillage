package com.NetVillage.NetVillage.Service;

import com.NetVillage.NetVillage.Mapper.UserMapper;
import com.NetVillage.NetVillage.Model.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserMapper userMapper;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public int signUser(UserVo join){
        join.setUser_pw(passwordEncoder.encode(join.getUser_pw()));
        return userMapper.signUser(join);
    }

    public UserVo loginUser(UserVo login){
        passwordEncoder.matches(login.getUser_pw(), userMapper.loginUser(login).getUser_pw());
        return userMapper.loginUser(login);
    }
}
