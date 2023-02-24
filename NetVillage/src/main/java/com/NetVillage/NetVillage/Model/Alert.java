package com.NetVillage.NetVillage.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.security.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Alert {
    // 알림번호
    private Integer alertIdx;

    // 회원 닉네임
    private String userNick;

    // 알림 내용
    private String alertContent;

    // 알림 시간
    private Timestamp alertTime;

    // 알림 보낸 사람
    private String sendFrom;

    // 알림 확인 여부
    private String checking;

}
