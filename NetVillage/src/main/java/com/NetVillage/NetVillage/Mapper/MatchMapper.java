package com.NetVillage.NetVillage.Mapper;

import com.NetVillage.NetVillage.Model.Match;
import com.NetVillage.NetVillage.Model.TbMatch;
import org.apache.ibatis.annotations.*;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MatchMapper {

    @Select("select * from tb_match")
    public List<TbMatch> getMatchList();
}
