package com.NetVillage.NetVillage.Controller;

import com.NetVillage.NetVillage.Model.UserInfo;
import com.NetVillage.NetVillage.Service.MyPageService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyPageController {

    //Gson 호출
    Gson gson = new Gson();

    //마이페이지 서비스 호출
    @Autowired
    MyPageService myPageService;


    //닉네임 중복 확인
    @RequestMapping(value = "/MyEdit/nickCK", method = RequestMethod.POST, produces = "application/json; charset=utf8")
    public String nickCk(@RequestBody UserInfo nick) {

//        System.out.println(nick);

       String jsonStr = gson.toJson(nick);

        UserInfo user = gson.fromJson(jsonStr, UserInfo.class);
//        System.out.println("수정할 닉네임: "+user);

        String nickCk = myPageService.nickCk(user.getUser_nick());
//        System.out.println(myPageService.nickCk(user.getUser_nick()));

        if (nickCk != null) {
            return "fail";// 중복된다는 뜻
        } else {
            return "success";// 중복이 아니라는 뜻
        }

    }

    //회원 정보 수정
    @RequestMapping(value = "/userInfoUpdate", method = RequestMethod.POST, produces = "application/json; charset=utf8")
    public int userUpdate(@RequestBody UserInfo editInfo) {

        System.out.println("수정할 정보: "+editInfo);

        int userUpdate = myPageService.userUpdate(editInfo);

       return userUpdate;

    }



}
