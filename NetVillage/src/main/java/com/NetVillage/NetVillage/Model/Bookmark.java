package com.NetVillage.NetVillage.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Bookmark {
    // 북마크 번호
    private Integer bookmarkIdx;

    // 게시글 번호
    private Integer boardIdx;

    // 회원 아이디
    private String userId;
}
