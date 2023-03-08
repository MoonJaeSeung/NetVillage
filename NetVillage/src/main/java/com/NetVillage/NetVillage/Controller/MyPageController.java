package com.NetVillage.NetVillage.Controller;

import com.NetVillage.NetVillage.Model.TbMatch;
import com.NetVillage.NetVillage.Model.UserInfo;
import com.NetVillage.NetVillage.Service.MyPageService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

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

    //경기 승패 입력하기
    @RequestMapping(value = "/matchResult", method = RequestMethod.POST, produces = "application/json; charset=utf8")
    public List<TbMatch> matchResult(@RequestBody UserInfo user_nick) {

//        System.out.println("닉네임 가져오니?: "+user_nick);
        String jsonStr = gson.toJson(user_nick);
//        System.out.println("변환된 닉네임 :" + jsonStr);
        UserInfo user = gson.fromJson(jsonStr, UserInfo.class);

        System.out.println("승패 입력을 위한 참여 정보: "+myPageService.matchResult(user.getUser_nick()));

        return myPageService.matchResult(user.getUser_nick());

    }

    //이겼다고 입력한 경우
    @RequestMapping(value = "/winner", method = RequestMethod.POST, produces = "application/json; charset=utf8")
    public int matchResultWinner(@RequestBody Map<String, Object> data) {

        System.out.println("어떻게 넘어오는 거지?"+ data);

        if (data != null){
            System.out.println("이긴 사람 나야나?~"+data);
            return myPageService.matchResultWinner(data);

        } else {
            System.out.println("비엇슈!");
            return 0;
        }

    }

    //졌다고 입력한 경우
    @RequestMapping(value = "/loser", method = RequestMethod.POST, produces = "application/json; charset=utf8")
    public int matchResultLoser(@RequestBody Map<String, Object> data) {

        String jsonStr = gson.toJson(data);
//        System.out.println("변환된 닉네임 :" + jsonStr);
        UserInfo user = gson.fromJson(jsonStr, UserInfo.class);

//        System.out.println("먼디먼디"+user.getUser_nick());

        if (user.getUser_nick().isEmpty()){
            System.out.println("비엇슈!");
        } else {
            System.out.println("이긴 상대방 "+user.getUser_nick());
            System.out.println("이긴 상대방 매치번호 "+data);
            return myPageService.matchResultLoser(data);

        }

        return 0;
    }

}
