package com.NetVillage.NetVillage.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class KakaoLogin {
    // 카카오 회원번호
    private Integer kIdx;

    // 카카오 이름
    private String kName;

    // 카카오 계정
    private String kEmail;
}
