package com.NetVillage.NetVillage.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Timestamp;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Comment {
    // 댓글 번호
    private Integer comm_idx;

    // 게시글 번호
    private Integer board_idx;

    // 댓글 내용
    private String comm_contents;

    // 대댓글 구분
    private Integer comm_depth;

    // 회원 닉네임
    private String user_nick;

    // 댓글 삭제여부
    private String is_deleted;

    // 댓글 작성일
    private Date comm_date;

    // 댓글 수정일
    private Date comm_update;
}
