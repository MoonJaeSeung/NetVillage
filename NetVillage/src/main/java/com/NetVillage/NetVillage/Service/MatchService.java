package com.NetVillage.NetVillage.Service;


import com.NetVillage.NetVillage.Mapper.MatchMapper;
import com.NetVillage.NetVillage.Model.Match;
import com.NetVillage.NetVillage.Model.TbMatch;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MatchService {
    @Autowired
    final private MatchMapper matchMapper;


    public List<TbMatch> getMatchList() {
        return matchMapper.getMatchList();
    }
}
