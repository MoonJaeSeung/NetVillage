package com.NetVillage.NetVillage.Model;

import lombok.Data;

import java.util.Date;

@Data
public class Match {

    private Integer match_idx;

    private String user_nick1;

    private String user_nick2;

    private Date match_date;

    private Date match_time;

    private Integer win;

    private Integer room;

    private String ment;

    private String place;

    private Date create_date;

}
