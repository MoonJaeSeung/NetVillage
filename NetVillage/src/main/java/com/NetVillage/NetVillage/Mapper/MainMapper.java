package com.NetVillage.NetVillage.Mapper;

import com.NetVillage.NetVillage.Model.TbMatch;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MainMapper {

    @Select("select * from tb_match where user_nick2 is null AND DATEDIFF(NOW(), match_date) <= 0 order by match_date desc limit 0,10")
    public List<TbMatch> getMainList();

    @Select("SELECT * FROM tb_match WHERE game=#{selectedSports} AND DATEDIFF(REPLACE(#{startDate}, '-', ''), match_date) <= 0")
    public List<TbMatch> getSearchList(String selectedSports, String startDate);
}
