package com.NetVillage.NetVillage.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Comment {
    // 댓글 번호
    private Integer commIdx;

    // 게시글 번호
    private Integer boardIdx;

    // 댓글 내용
    private String commContents;

    // 대댓글 구분
    private Integer commDepth;

    // 회원 닉네임
    private String userNick;

    // 댓글 삭제여부
    private String isDeleted;

    // 댓글 작성일
    private Timestamp commDate;

    // 댓글 수정일
    private Timestamp commUpdate;
}
