package com.NetVillage.NetVillage.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserVo {
    private String user_id;
    private String user_pw;
    private String user_name;
    private String user_phone;
    private String region;
    private String user_gender;
    private String user_nick;
    private String user_auth;
    private Integer win;
    private Integer lose;
    private Integer score;
}
