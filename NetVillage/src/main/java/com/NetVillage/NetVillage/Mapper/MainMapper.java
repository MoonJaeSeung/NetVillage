package com.NetVillage.NetVillage.Mapper;

import com.NetVillage.NetVillage.Model.TbMatch;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MainMapper {

    @Select("select * from tb_match order by create_date desc limit 0,10")
    public List<TbMatch> getMainList();
}
