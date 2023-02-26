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
    private Integer commIdx;

    // 댓글 내용
    private String commContents;

    // 회원 닉네임
    private String userNick;

    // 댓글 작성일
    private Timestamp commDate;

    // 댓글 수정일
    private Timestamp commUpdate;

    // 게시글 번호
    private Integer boardIdx;

    private String confirm;
}
