package com.NetVillage.NetVillage.Service;

import com.NetVillage.NetVillage.Mapper.MainMapper;
import com.NetVillage.NetVillage.Model.TbMatch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MainService {

    @Autowired
    MainMapper mainMapper;

    public List<TbMatch> getMainList(){
        return mainMapper.getMainList();
    }
}
