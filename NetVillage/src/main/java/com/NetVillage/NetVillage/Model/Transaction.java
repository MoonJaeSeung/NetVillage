package com.NetVillage.NetVillage.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Timestamp;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Transaction {
    // 거래 번호
    private Integer tr_idx;

    // 거래 물품
    private String tr_item;

    // 판매자
    private String user_nick1;

    // 구매자
    private String user_nick2;

    // 게시글 번호
    private Integer board_idx;

    // 거래 완료일자
    private Date tr_date;

    private String tr_state;

    private String tr_stateYn;
}
