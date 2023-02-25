package com.NetVillage.NetVillage.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Mento {
    // 방번호
    private Integer roomIdx;

    // 모집여부
    private Integer room;

    // 멘트
    private String ment;

    // 멘티
    private String userNick1;

    // 멘토
    private String userNick2;

    // 종목
    private String game;

}
