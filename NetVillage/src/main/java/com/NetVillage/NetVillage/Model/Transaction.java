package com.NetVillage.NetVillage.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Transaction {
    // 거래 번호
    private Integer trIdx;

    // 거래 물품
    private String trItem;

    // 판매자
    private String userNick1;

    // 구매자
    private String userNick2;

    // 게시글 번호
    private Integer boardIdx;

    // 거래 완료일자
    private Timestamp trDate;

    private String trState;

    private String trStateYn;
}
