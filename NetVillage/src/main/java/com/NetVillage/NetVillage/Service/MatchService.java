package com.NetVillage.NetVillage.Service;

import com.NetVillage.NetVillage.Mapper.MatchMapper;
import com.NetVillage.NetVillage.Model.Match;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MatchService {

    final private MatchMapper matchMapper;

    public List<Match> getMatchList() {
        return matchMapper.getMatchList();
    }
}
