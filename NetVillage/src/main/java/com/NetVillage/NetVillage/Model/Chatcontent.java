package com.NetVillage.NetVillage.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Chatcontent {
    // 채팅내용 번호
    private Integer ccIdx;

    // 채팅방 번호
    private Integer crIdx;

    // 게시글 번호
    private Integer boardIdx;

    // 발화자
    private String talker;

    // 채팅 메세지
    private String msg;

    // 메세지 시간
    private Timestamp msgTime;

}
