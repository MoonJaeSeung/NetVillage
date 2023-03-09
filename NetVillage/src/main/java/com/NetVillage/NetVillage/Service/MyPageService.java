package com.NetVillage.NetVillage.Service;

import com.NetVillage.NetVillage.Mapper.MyPageMapper;
import com.NetVillage.NetVillage.Model.*;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    //이겼다고 입력한 경우
    public int matchResultWinner(Map<String, Object> data){

        return myPageMapper.matchResultWinner(data);

    }

    //졌다고 입력한 경우
    public int matchResultLoser(Map<String, Object> data){

        return myPageMapper.matchResultLoser(data);
    }

    //경기전적 불러오기
    public List<TbMatch> matchHistory(Map<String, Object> data){

        return myPageMapper.matchHistory(data);

    }

    //내가 쓴 글 가져오기
    public List<Board> myBoard(Map<String, Object> data){

        System.out.println("어떻게 반환하는지 봅시다 ㅠ"+myPageMapper.myBoard(data));

        return myPageMapper.myBoard(data);

    }

    //내가 쓴 댓글 가져오기
    public List<Comment> myComm(Map<String, Object> data){

        return myPageMapper.myComm(data);

    }

    //북마크 내역 불러오기
    public List<Bookmark> myBookmark(Map<String, Object> data){

        return myPageMapper.myBookmark(data);

    }

}
