package com.NetVillage.NetVillage.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserInfo {
    // 회원 아이디
    private String user_id;

    // 회원 비밀번호
    private String user_pw;

    // 회원 이름
    private String user_name;

    // 회원 전화번호
    private String user_phone;

    // 지역
    private String region;

    // 회원 성별
    private String user_gender;

    // 회원 닉네임
    private String user_nick;

    // 회원 권한
    private String user_auth;

    // 승
    private Integer win;

    // 패
    private Integer lose;

    // 페어플레이 점수
    private Integer score;

    // 신고 횟수
    private Integer report_num;

    // 회원 ip
    private String user_ip;
}
