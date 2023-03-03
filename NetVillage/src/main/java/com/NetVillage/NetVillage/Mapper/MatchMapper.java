package com.NetVillage.NetVillage.Mapper;

import com.NetVillage.NetVillage.Model.Match;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MatchMapper {

    List<Match> getMatchList();
}
