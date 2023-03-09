package com.NetVillage.NetVillage.Mapper;

import com.NetVillage.NetVillage.Model.*;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;
import java.util.Map;

@Mapper
public interface MyPageMapper {

    //비밀번호 변경
    @Update("update user_info set user_pw = #{user_pw} where user_id = #{user_id}")
    public int userUpdate(UserInfo editInfo);

    //회원탈퇴
        //비밀번호 일치 확인
    @Select("select user_pw from user_info where user_id = #{user_id}")
    public String userCK(UserInfo deleteInfo);

        //회원정보 삭제
    @Delete("delete from user_info where user_id = #{user_id}")
    public int userDelete(UserInfo deleteInfo);

    //승패 결과 입력할 거 있나 조회
    @Select("select * from tb_match where (user_nick1 = #{user_nick} or user_nick2 = #{user_nick}) and DATE_FORMAT(match_date, '%Y-%m-%d') < DATE_FORMAT(now(), '%Y-%m-%d')")
    public List<TbMatch> matchResult(String user_nick);

//    @Select("select * from tb_match where user_nick1 = #{user_nick} or user_nick2 = #{user_nick}")
//    public List<TbMatch> matchResult(String user_nick);

    //이겼다고 입력한 경우
    @Update("update tb_match set win = #{user_nick} where match_idx = #{match_idx}")
    public int matchResultWinner(Map<String, Object> data);

    //졌다고 입력한 경우
    @Update("update tb_match set win = #{user_nick} where match_idx = #{match_idx}")
    public int matchResultLoser(Map<String, Object> data);

    //경기전적 불러오기, 내가 쓴 글 & 댓글 & 북마크 내역 불러오기
//    @Select("SELECT game, COUNT(*) as cnt, COUNT(CASE WHEN win=#{user_nick} THEN 1 END) as win FROM tb_match WHERE (user_nick1 = #{user_nick} OR user_nick2 = #{user_nick}) AND win is not null")
    @Select("SELECT game, (SELECT COUNT(*) from tb_match WHERE (user_nick1 = #{user_nick} OR user_nick2 = #{user_nick}) AND win is not null)as cnt, (SELECT COUNT(CASE WHEN win=#{user_nick} THEN 1 END) from tb_match WHERE (user_nick1 = #{user_nick} OR user_nick2 = #{user_nick}) AND win is not null)as win FROM tb_match WHERE (user_nick1 = #{user_nick} OR user_nick2 = #{user_nick}) AND win is not null")
    public List<TbMatch> matchHistory(Map<String, Object> data);

    @Select("SELECT board_idx, board_title, board_cate FROM board WHERE user_nick = #{user_nick}")
    public List<Board> myBoard(Map<String, Object> data);

    @Select("SELECT board_idx, comm_contents FROM comment WHERE user_nick = #{user_nick}")
    public List<Comment> myComm(Map<String, Object> data);

    @Select("SELECT board_idx, (select user_nick from user_info where user_id = #{user_id})as user_id FROM bookmark b  WHERE user_id = #{user_id}")
    public List<Bookmark> myBookmark(Map<String, Object> data);

}
