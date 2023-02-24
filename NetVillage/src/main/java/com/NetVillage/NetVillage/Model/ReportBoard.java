package com.NetVillage.NetVillage.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReportBoard {
    // 게시글 번호
    private Integer boardIdx;

    // 게시글 유형
    private String boardCate;

    // 게시글 제목
    private String boardTitle;

    // 게시글 내용
    private String boardContents;

    // 게시글 작성일
    private Timestamp boardDate;

    // 게시글 수정일
    private Timestamp boardUpdate;

    // 파일1
    private String boardFile1;

    // 파일2
    private String boardFile2;

    // 파일3
    private String boardFile3;

    // 회원 닉네임
    private String userNick;

    private String confirm;

}
