import React from 'react'

const Footer = () => {
  const FooterContainer = {
    padding: "4rem 2rem",
    borderTop: "1px solid var(--color-lightgray)",
    fontFamily: "Interop-Regular"
  }

  const Container = {
    display: "flex",
    marginBottom: "3rem",
    gap: "3rem"
  }

  const DescWrapper = {
    flex: "2"
  }

  const Wrapper = {
    flex: "1"
  }

  return (
    <div className="FooterContainer" style={FooterContainer}>
      <div className='Container' style={Container}>
      <div className='DescWrapper' style={DescWrapper}>
        <div className='FooterHead'>소개</div>
        <div className='Paragraph'>소개글 내용</div>
      </div>
      <div className='Wrapper' style={Wrapper}>
        <div className='FooterHead'>자료</div>
        <div className=''>레포지토리</div>
        <div className=''>위키</div>
      </div>
      <div className='Wrapper'>
        <div className='FooterHead'>멤버</div>
        <div className=''><a href='https://github.com/0dain'>임다인</a></div>
        <div className=''><a href='https://github.com/ignaciocha'>노한서</a></div>
        <div className=''><a href='https://github.com/MoonJaeSeung'>문재승</a></div>
        <div className=''><a href='https://github.com/js4183'>주상민</a></div>
      </div>
      </div>
    </div>
  )
}

export default Footer