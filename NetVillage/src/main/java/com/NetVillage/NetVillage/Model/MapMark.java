package com.NetVillage.NetVillage.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MapMark {
    // 마커번호
    private Integer mapIdx;

    // 장소
    private String place;

    // 위도
    private BigDecimal lat;

    // 경도
    private BigDecimal lng;

    // 동네
    private String village;
}
