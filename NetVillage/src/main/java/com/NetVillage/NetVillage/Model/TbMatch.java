package com.NetVillage.NetVillage.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TbMatch {
    // 매치번호
    private Integer matchIdx;

    // 작성자
    private String userNick1;

    // 신청자
    private String userNick2;

    // 매치날짜
    private Timestamp matchDate;

    // 매치시작시간
    private String matchTime;

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
    private Timestamp createDate;
}
