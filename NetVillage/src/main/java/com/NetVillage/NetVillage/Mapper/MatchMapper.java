package com.NetVillage.NetVillage.Mapper;

import com.NetVillage.NetVillage.Model.TbMatch;
import org.apache.ibatis.annotations.*;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MatchMapper {


    @Select("select * from tb_match")
    public List<TbMatch> getMatchList();

    @Select("select * from tb_match where category=#{category}")
    public List<TbMatch> getMatchList1(String category);

    @Insert("insert into tb_match (ment, user_nick1,match_date,place,game) values(#{ment}, #{user_nick1}, #{match_date},#{place},#{game})")
    public int add(TbMatch tbMatch);

    @Update("update tb_match set user_nick2=#{user_nick2} where match_idx=#{match_idx}")
    public int join(TbMatch tbMatch);
}
