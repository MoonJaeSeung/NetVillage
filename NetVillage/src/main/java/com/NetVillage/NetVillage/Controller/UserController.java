package com.NetVillage.NetVillage.Controller;

import com.NetVillage.NetVillage.Model.UserVo;
import com.NetVillage.NetVillage.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/user")
@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/signup")
    public int signUser(@RequestBody UserVo join) throws Exception{
        return userService.signUser(join);
    }

    @PostMapping("/checkid")
    public int checkId(@RequestBody UserVo checkid) throws Exception{
        return userService.checkId(checkid);
    }

    @PostMapping("/checknick")
    public int checkNick(@RequestBody UserVo checknick) throws Exception{
        return userService.checkNick(checknick);
    }

    @PostMapping("/signin")
    public UserVo loginUser(@RequestBody UserVo login) throws Exception{
        return userService.loginUser(login);
    }

    @PostMapping("/update")
    public int updateUser(@RequestBody UserVo update) throws Exception{
        return userService.updateUser(update);
    }

    @PostMapping("/delete")
    public int deleteUser(@RequestBody UserVo delete) throws Exception{
        return userService.deleteUser(delete);
    }
}
