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

    public int checkId(UserVo checkid){
        return userMapper.checkId(checkid);
    }

    public int checkNick(UserVo checknick){
        return userMapper.checkNick(checknick);
    }

    public UserVo loginUser(UserVo login){
        passwordEncoder.matches(login.getUser_pw(), userMapper.loginUser(login).getUser_pw());
        return userMapper.loginUser(login);
    }

    public int updateUser(UserVo update){
        update.setUser_pw(passwordEncoder.encode(update.getUser_id()));
        return userMapper.updateUser(update);
    }

    public int deleteUser(UserVo delete){
        return userMapper.deleteUser(delete);
    }
}
