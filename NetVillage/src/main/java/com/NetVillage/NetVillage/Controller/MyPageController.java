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

    //비밀번호 변경
    @RequestMapping(value = "/userInfoUpdate", method = RequestMethod.POST, produces = "application/json; charset=utf8")
    public int userUpdate(@RequestBody UserInfo editInfo) {

//        System.out.println("수정할 정보: "+editInfo);

        return myPageService.userUpdate(editInfo);

    }

    //회원탈퇴
    @RequestMapping(value = "/userInfoDelete", method = RequestMethod.POST, produces = "application/json; charset=utf8")
    public int userDelete(@RequestBody UserInfo deleteInfo) {

//        System.out.println("수정할 정보: "+deleteInfo);

        return myPageService.userDelete(deleteInfo);

    }



}
