class Calculator {
    constructor(displayElement) {
        // 생성자 함수 constructor를 통해 displayElemet를 초기상태 지정 책상 정리
        this.displayElement = displayElement
        // 빈 문자열 displayContent 정의
        this.displayContent = ''
        // clear 메소드 호출 dispalyElemet , displayContent 초기화
        this.clear()
    }
    // 매개변수로 받은 number 값을 diplaycontent에 축적
    appendNumber(number) {
        this.displayContent += number
    }
    // 매개변수로 받은 operator 연산자를 diplaycontent에 축적
    appendOperator(operator) {
        this.displayContent += operator
    }
    // 결과값 최종 도출
    updateDisplay() {
        this.displayElement.value = this.displayContent
    }
    // html 버튼 타입 ac일 경우  결과 값 0 
    clear() {
        this.displayContent = ''
        this.displayElement.value = 0
    }
    // *eval() 함수. 사칙 연산과 관련된 산술연산자.
    compute() {
        this.displayContent = eval(this.displayContent
            .replace('\u00D7', '*')
            .replace('\u00F7', '/')
        )
    }
}

// button에 해당 변수 선언 button 타입 리스트 타입 반환
const buttons = document.querySelectorAll('button')
// input에 해당 변수 선언 input 선택자 입력된 내용을 보여주는 부분
const displayElement = document.querySelector('input')
// 객체 생성
const calculator = new Calculator(displayElement)

buttons.forEach(button => {
    // 클릭 이벤트
    button.addEventListener('click', () => {
        //html에 버튼 타입 
        switch (button.dataset.type) {
            // 연산자 매서드 매개변수
            case 'operator':
                calculator.appendOperator(button.innerText)
                calculator.updateDisplay()
                break
            // 지우기
            case 'ac':
                calculator.clear()
                break
            // 결과 값 equals 
            case 'equals':
                calculator.compute()
                calculator.updateDisplay()
                break
            // 숫자 매서드 매개변수
            default:
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
                break
        }
    })
})

