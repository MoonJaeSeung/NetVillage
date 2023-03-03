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
    private Integer alert_idx;

    // 회원 닉네임
    private String user_nick;

    // 알림 내용
    private String alert_content;

    // 알림 시간
    private Timestamp alert_time;

    // 알림 보낸 사람
    private String send_from;

    // 알림 확인 여부
    private String checking;

}
