import { RedInput, BlueButton } from './BoardWrite.styles'

export default function BoardWriteUI(props) {

  return (
    // props로 바인딩된 객체들을 각각에게 설정해줌.
      <div>
        <div>@@@@@@@@@@@ 여기는 프리젠터입니다. @@@@@@@@@@@</div>
          작성자: <RedInput 
                    type="text" 
                    onChange={props.onChangeWriter} 
                  />
          제목: <input type="text" onChange={props.onChangeTitle} />
          내용: <input type="text" onChange={props.onChangeContents} />
          <BlueButton 
            onClick={props.onClickSubmit}
            onAbort={props.onChangeCheck}
            isActive={props.isActive}
          >
            GRAPHQL-API 요청하기
          </BlueButton>
        <div>@@@@@@@@@@@ 여기는 프리젠터입니다. @@@@@@@@@@@</div>
      </div>

  )

}

export const apple = 3