package com.NetVillage.NetVillage.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Timestamp;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TbMatch {
    // 매치번호
    private Integer match_idx;

    // 작성자
    private String user_nick1;

    // 신청자
    private String user_nick2;

    // 매치날짜
    private String match_date;

    // 매치시작시간
    private String match_time;

    // 승자
    private String win;

    // 모집여부
    private Integer room;

    // 멘트
    private String ment;

    // 장소
    private String place;

    // 종목
    private String game;

    // 생성일자
    private String create_date;

    private String category;

    //전적 불러올 때 사용
    private int cnt;

}
