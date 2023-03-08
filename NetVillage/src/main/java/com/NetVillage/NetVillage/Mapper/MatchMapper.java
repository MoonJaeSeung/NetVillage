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
    public List<TbMatch> getMatchList1(int category);

    @Insert("insert into tb_match (ment) values(#{comment})")
    public int add(TbMatch tbMatch);
}
