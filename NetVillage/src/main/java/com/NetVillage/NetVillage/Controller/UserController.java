package com.NetVillage.NetVillage.Controller;

import com.NetVillage.NetVillage.Model.UserInfo;
import com.NetVillage.NetVillage.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/user")
@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/signup")
    public int signUser(@RequestBody UserInfo join) throws Exception{
        return userService.signUser(join);
    }

    @PostMapping("/checkid")
    public int checkId(@RequestBody UserInfo checkid) throws Exception{
        return userService.checkId(checkid);
    }

    @PostMapping("/checknick")
    public int checkNick(@RequestBody UserInfo checknick) throws Exception{
        return userService.checkNick(checknick);
    }

    @PostMapping("/login")
    public UserInfo loginUser(@RequestBody UserInfo login) throws Exception{
        return userService.loginUser(login);
    }

    @PostMapping("/update")
    public int updateUser(@RequestBody UserInfo update) throws Exception{
        return userService.updateUser(update);
    }

    @PostMapping("/delete")
    public int deleteUser(@RequestBody UserInfo delete) throws Exception{
        return userService.deleteUser(delete);
    }
}
