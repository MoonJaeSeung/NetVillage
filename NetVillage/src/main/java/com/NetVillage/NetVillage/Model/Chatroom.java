package com.NetVillage.NetVillage.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Chatroom {
    // 채팅방 번호
    private Integer crIdx;

    // 게시글 번호
    private Integer boardIdx;

    // 내 닉네임
    private String userNick1;

    // 채팅방 생성일
    private Timestamp crDate;

    // 상대방 닉네임
    private String userNick2;

    // 채팅방 상태
    private String crStatus;
}
