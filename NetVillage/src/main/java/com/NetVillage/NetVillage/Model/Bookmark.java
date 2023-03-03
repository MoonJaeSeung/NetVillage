package com.NetVillage.NetVillage.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Bookmark {
    // 북마크 번호
    private Integer bookmark_idx;

    // 게시글 번호
    private Integer board_idx;

    // 회원 아이디
    private String user_id;
}
