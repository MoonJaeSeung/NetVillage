package com.NetVillage.NetVillage.Service;


import com.NetVillage.NetVillage.Mapper.MatchMapper;
import com.NetVillage.NetVillage.Model.TbMatch;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MatchService {
    final private MatchMapper matchMapper;


    public List<TbMatch> getMatchList1(String category) {

        return matchMapper.getMatchList1(category);
    }

    public List<TbMatch> getMatchList() {

        return matchMapper.getMatchList();
    }

    public int add(TbMatch tbMatch){





        return matchMapper.add(tbMatch);
    }

    public int join(TbMatch tbMatch) {return matchMapper.join(tbMatch);}
}


















