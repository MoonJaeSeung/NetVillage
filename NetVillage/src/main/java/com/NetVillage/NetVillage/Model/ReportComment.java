package com.NetVillage.NetVillage.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReportComment {
    // 댓글 번호
    private Integer comm_idx;

    // 댓글 내용
    private String comm_contents;

    // 회원 닉네임
    private String user_nick;

    // 댓글 작성일
    private Timestamp comm_date;

    // 댓글 수정일
    private Timestamp comm_update;

    // 게시글 번호
    private Integer board_idx;

    private String confirm;
}
