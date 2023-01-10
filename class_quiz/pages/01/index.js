import {
  Container,
  Wrapper,
  Header,
  SearchIconBox, SearchIcon,
  InfoBox, InfoTitle,
  UserBox, UserImg, UserArrow,
  UserLinkTag1, UserLinkTag2, UserLinkTag3
} from '../../styles/style'

export default function Notice() {


  return (
    <Container>
      <Wrapper>
        <Header>
          <SearchIconBox>
            <SearchIcon src="images/search.png" alt="검색아이콘" />
          </SearchIconBox>
          <InfoBox>
            <InfoTitle>마이</InfoTitle>
            <UserBox>
              <UserLinkTag1 href='#'>
                <UserImg src='images/user.png' alt='유저이미지'/>
              </UserLinkTag1>
              <UserLinkTag2>임정아</UserLinkTag2>
              <UserLinkTag3 href='#'>
                <UserArrow src='images/arrow-right.png' alt='화살표아이콘'/>
              </UserLinkTag3>
            </UserBox>
          </InfoBox>
        </Header>
      </Wrapper>
    </Container>
  )

}