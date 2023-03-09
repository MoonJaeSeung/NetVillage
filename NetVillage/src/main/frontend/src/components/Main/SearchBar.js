import React,{ useState } from 'react';
import styled from 'styled-components';
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko';
import moment from 'moment'
import {useNavigate} from 'react-router-dom';
registerLocale('ko',ko);

const SelectContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Select = styled.select`
  padding: 16px 32px;
  width: 200px;
  outline: none;
  border-radius: 4px;
  margin: 20px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const SelectBtn = styled.button`
  width: 56px;
  border: solid 0px;
  background-color: #CAFFBE;
  margin: 20px;
`;

const DateHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const DateMonth = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const DateYear = styled.div`
  font-size: 16px;
`;

const DateBtn = styled.button`
  font-size: 16px;
  font-weight: bold;
  color: #555;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  :hover {
    color: #000;
  }
`;

const DatePickerContainer = styled.div`
  padding: 16px 32px;
  width: 200px;
  border: 1px solid gray;
  border-radius: 4px;
  margin: 20px;
`;

const SearchBar = () => {
    const [selectedSports,setSelectedSports] = useState('');
    // const [selectedCity, setSelectedCity] = useState('');
    // const [selectedRegion, setSelectedRegion] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();

    const renderCustomHeader = ({ date, decreaseMonth, increaseMonth }) => {
        return (
            <DateHeader>
                <div>
                    <DateMonth>{date.toLocaleString("default", { month: "long" })}</DateMonth>
                    <DateYear>{date.getFullYear()}</DateYear>
                </div>
                <DateBtn onClick={decreaseMonth}>{"<"}</DateBtn>
                <DateBtn onClick={increaseMonth}>{">"}</DateBtn>
            </DateHeader>
        );
    };

    function handleSportsChange(event){
        const sports = event.target.value;
        setSelectedSports(sports);
    }
    // function handleCityChange(event) {
    //     const city = event.target.value;
    //     setSelectedCity(city);
    //
    //     // 선택한 걸그룹에 해당하는 멤버를 선택할 수 있는 옵션 생성
    //     const regions = getRegionByCity(city);
    //     const regionOptions = regions.map((region) => (
    //         <option key={region} value={region}>{region}</option>
    //     ));
    //     setRegionOptions(regionOptions);
    // }

    // function handleRegionChange(event) {
    //     setSelectedRegion(event.target.value);
    // }

    // function getRegionByCity(city) {
    //     switch (city) {
    //         case 'Gwangsan-gu':
    //             return ["송정동","도산동","도호동","신촌동","서봉동","운수동","선암동","소촌동","우산동","황룡동","박호동","비아동","도천동","수완동","월계동","쌍암동","산월동","신창동","신가동","운남동","안청동","진곡동","장덕동","흑석동","하남동","장수동","산정동","월곡동","등임동","산막동","고룡동","신룡동","두정동","임곡동","광산동","오산동","사호동","하산동","유계동","본덕동","용봉동","요기동","복룡동","송대동","옥동월","전동장","록동송","촌동","지죽동","용동","용곡동","지정동","명화동","동산동","연산동","도덕동","송산동","지평동","오운동","삼거동","양동","내산동","대산동","송학동","신동","삼도동","남산동","송치동","산수동","선동","지산동","왕동","북산동","명도동","동호동","덕림동","양산동","동림동","오선동","송정1동","송정2동","신흥동","어룡동","월곡1동","월곡2동","첨단1동","첨단2동","동곡동","평동","본량동"];
    //         case 'Buk-gu':
    //             return ["중흥동","유동","누문동","북동","임동","신안동","용봉동","동림동","운암동","우산동","풍향동","문흥동","각화동","두암동","오치동","삼각동","매곡동","충효동","덕의동","금곡동","망월동","청풍동","화암동","장등동","운정동","본촌동","일곡동","양산동","연제동","신용동","용두동","지야동","태령동","수곡동","효령동","용전동","용강동","생용동","월출동","대촌동","오룡동","중흥1동","중흥2동","중흥3동","중앙동","운암1동","운암2동","운암3동","문화동","문흥1동","문흥2동","두암1동","두암2동","두암3동","오치1동","오치2동","석곡동","건국동"];
    //         case 'Dong-gu':
    //             return ["대인동","금남로5가","충장로5가","수기동","대의동","궁동","장동","동명동","계림동","산수동","지산동","남동","광산동","금동","호남동","불로동","황금동","서석동","소태동","용연동","운림동","학동","월남동","선교동","내남동","용산동","충장로1가","충장로2가","충장로3가","충장로4가","금남로1가","금남로2가","금남로3가","금남로4가","충장동","계림1동","계림2동","산수1동","산수2동","지산1동","지산2동","서남동","학운동","지원1동","지원2동"];
    //         case 'Seo-gu':
    //             return ["양동","농성동","광천동","유촌동","덕흥동","쌍촌동","화정동","치평동","내방동","서창동","세하동","용두동","풍암동","벽진동","금호동","마륵동","매월동","동천동","양3동","농성1동","농성2동","유덕동","상무1동","상무2동","화정1동","화정2동","화정3동","화정4동","금호1동","금호2동"];
    //         case 'Nam-gu':
    //             return ["사동","구동","서동","월산동","백운동","주월동","노대동","진월동","덕남동","행암동","임암동","송하동","양림동","방림동","봉선동","구소동","양촌동","도금동","승촌동","지석동","압촌동","화장동","칠석동","석정동","신장동","양과동","이장동","대지동","원산동","월성동","방림1동","방림2동","봉선1동","봉선2동","사직동","월산4동","월산5동","백운1동","백운2동","주월1동","주월2동","효덕동","송암동","대촌동"];
    //         default:
    //             return ['동을 선택해주세요'];
    //     }
    // }

    const sportsOptions =(
      <>
          <option>종목을 선택해주세요</option>
          <option value="탁구">탁구</option>
          <option value="당구">당구</option>
          <option value="볼링">볼링</option>
          <option value="테니스">테니스</option>
          <option value="배드민턴">배드민턴</option>
      </>
    );

    // const cityOptions = (
    //     <>
    //         <option>구를 선택해주세요</option>
    //         <option value="Gwangsan-gu">광산구</option>
    //         <option value="Buk-gu">북구</option>
    //         <option value="Dong-gu">동구</option>
    //         <option value="Seo-gu">서구</option>
    //         <option value="Nam-gu">남구</option>
    //     </>
    // );
    //
    // const [regionOptions, setRegionOptions] = useState(
    //     <option>동을 선택해주세요</option>
    // );

    const CustomInput = ({ value, onClick }) => (
        <DatePickerContainer onClick={onClick}>
            {value}
        </DatePickerContainer>
    );

    const SearchBtn = () => {
        console.log(selectedSports);
        console.log(moment(startDate).format("YYYY-MM-DD"));
        navigate(`/Search?Sports=${selectedSports}&Date=${moment(startDate).format("YYYY-MM-DD")}`);
    }

    return (
        <SelectContainer>
            <Select value={selectedSports} onChange={handleSportsChange}>
                {sportsOptions}
            </Select>
            {/*<Select value={selectedCity} onChange={handleCityChange}>*/}
            {/*    {cityOptions}*/}
            {/*</Select>*/}
            {/*<Select value={selectedRegion} onChange={handleRegionChange}>*/}
            {/*    {regionOptions}*/}
            {/*</Select>*/}
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                <DatePicker
                    locale="ko"
                    dateFormat="yyyy-MM-dd"
                    selected={startDate}
                    minDate={new Date()}
                    onChange={date => setStartDate(date)}
                    renderCustomHeader={renderCustomHeader}
                    customInput={<CustomInput />}
                />
            </div>
            <SelectBtn onClick={SearchBtn}>
                검색
            </SelectBtn>
        </SelectContainer>
    );
};

export default SearchBar;
